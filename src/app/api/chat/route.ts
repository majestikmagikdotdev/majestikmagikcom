import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

// Rate limiting: max 20 requests per IP per 60 seconds
const rateLimitMap = new Map<string, { count: number; reset: number }>();
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60_000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.reset) {
    rateLimitMap.set(ip, { count: 1, reset: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

const MAX_HISTORY_ENTRIES = 10;
const MAX_MESSAGE_LENGTH = 500;

const SYSTEM_INSTRUCTION = `
You are the official AI representative for Majestik Magik, the company behind DMAS Intake — an offline-first Electronic Visit Verification and DMAS compliance platform built for rural Virginia home health agencies.

Your Primary Goals:
1. Answer questions about DMAS Intake clearly and confidently: what it is, how offline-first EVV works, DMAS-97A/B & DMAS-98R/99 form capture, AES-256 encryption, EVV GPS logging, HIPAA-readiness, and automatic sync.
2. Explain the problem it solves: rural Virginia home health agencies lose Medicaid reimbursement due to missing EVV data when aides have no cell service. DMAS Intake eliminates that risk.
3. Direct interested agency directors to request a demo at https://majestikmagik.dev or email contact@majestikmagik.dev.
4. Answer questions relevant to YC applicants or investors about the market, the problem, and the technical approach.

Key Facts:
- Product: DMAS Intake — offline-first EVV and DMAS compliance software
- Market: Virginia home health agencies, DMAS providers, Medicaid waiver service providers
- Problem: Cloud-based EVV tools fail without cell service, causing Medicaid audit clawbacks for rural agencies
- Solution: Local-first PWA that captures DMAS-97A/B, DMAS-98R, DMAS-99 forms and EVV GPS data on-device with AES-256 encryption, syncing automatically when connectivity returns
- Mandate: The 21st Century Cures Act requires EVV for all Medicaid-funded home health services. Virginia enforces this through DMAS.
- Builder: Jamil Matheny, Founder of Majestik Magik, Inc., Richmond VA
- Demo: https://dmas-intake.majestikmagik.dev
- Contact: contact@majestikmagik.dev

Guidelines:
- Tone: Direct, technically confident, and helpful.
- Do not discuss unrelated web agency services like Shopify, WordPress, or general web design.
- For pricing or contract questions, direct users to email contact@majestikmagik.dev.
- Keep answers concise and action-oriented.
`;

function base64url(str: string): string {
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function base64urlFromUint8Array(buf: Uint8Array): string {
  return btoa(String.fromCharCode(...buf)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function signJWT(clientEmail: string, privateKeyPem: string): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const payload = base64url(JSON.stringify({
    iss: clientEmail,
    sub: clientEmail,
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
    scope: 'https://www.googleapis.com/auth/cloud-platform',
  }));

  const pemBody = privateKeyPem
    .replace(/-----BEGIN PRIVATE KEY-----|-----END PRIVATE KEY-----/g, '')
    .replace(/\s+/g, '');
  const keyBytes = Uint8Array.from(atob(pemBody), c => c.charCodeAt(0));

  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    keyBytes,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const data = new TextEncoder().encode(`${header}.${payload}`);
  const sigBuf = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', cryptoKey, data);
  const signature = base64urlFromUint8Array(new Uint8Array(sigBuf));

  return `${header}.${payload}.${signature}`;
}

async function getAccessToken(): Promise<string> {
  const credJson = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;

  if (credJson) {
    const cleaned = credJson.replace(/^'+|'+$/g, '').trim();
    const key = JSON.parse(cleaned);
    const privateKey = key.private_key.replace(/\\n/g, '\n');
    const jwt = await signJWT(key.client_email, privateKey);
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: jwt,
      }),
    });
    if (!tokenRes.ok) throw new Error('Failed to exchange JWT for access token');
    const { access_token } = await tokenRes.json();
    return access_token;
  }

  // GCP production: use metadata server
  const res = await fetch(
    'http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/token',
    { headers: { 'Metadata-Flavor': 'Google' } }
  );
  if (!res.ok) throw new Error('Failed to fetch GCP access token from metadata server');
  const { access_token } = await res.json();
  return access_token;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('cf-connecting-ip') ?? req.headers.get('x-forwarded-for') ?? 'unknown';
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  try {
    const { message, history } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Missing message' }, { status: 400 });
    }

    const safeMessage = message.slice(0, MAX_MESSAGE_LENGTH);

    const project = process.env.VERTEX_PROJECT_ID!;
    const location = process.env.VERTEX_LOCATION!;
    const model = process.env.VERTEX_MODEL!;
    const endpoint = `https://${location}-aiplatform.googleapis.com/v1/projects/${project}/locations/${location}/publishers/google/models/${model}:generateContent`;

    const accessToken = await getAccessToken();

    const safeHistory = (Array.isArray(history) ? history : [])
      .slice(-MAX_HISTORY_ENTRIES)
      .map((entry: { role: string; parts: { text: string }[] }) => ({
        role: entry.role === 'model' ? 'model' : 'user',
        parts: [{ text: String(entry.parts?.[0]?.text ?? '').slice(0, MAX_MESSAGE_LENGTH) }],
      }));

    const body = {
      systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
      contents: [
        ...safeHistory,
        { role: 'user', parts: [{ text: safeMessage }] },
      ],
      generationConfig: { maxOutputTokens: 1024, temperature: 0.7 },
    };

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Vertex AI REST error:', err);
      return NextResponse.json({ error: 'AI service unavailable' }, { status: 500 });
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';

    return NextResponse.json({ text });
  } catch (error) {
    console.error('Vertex AI error:', error);
    return NextResponse.json({ error: 'AI service unavailable' }, { status: 500 });
  }
}
