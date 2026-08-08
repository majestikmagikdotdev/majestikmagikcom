import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

const SYSTEM_INSTRUCTION =
  "You are a friendly and helpful AI assistant for Majestik Magik, a company specializing in AI-powered website design and digital systems solutions. Your goal is to answer user questions about Majestik Magik, its services (Custom Web Development, SEO, Digital Marketing, Pivot Quest), and help them navigate the website. Be concise and informative. If asked about pricing, politely state that more information can be found by visiting the relevant page. If a custom website inquiry is needed, politely state that an invoice may be issued for the service provided. If asked about pricing or specific features not detailed, politely state that more information can be found by contacting Majestik Magik directly through the contact options on the website or by visiting the relevant page.";

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
  try {
    const { message, history } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Missing message' }, { status: 400 });
    }

    const project = process.env.VERTEX_PROJECT_ID!;
    const location = process.env.VERTEX_LOCATION!;
    const model = process.env.VERTEX_MODEL!;
    const endpoint = `https://${location}-aiplatform.googleapis.com/v1/projects/${project}/locations/${location}/publishers/google/models/${model}:generateContent`;

    const accessToken = await getAccessToken();

    const vertexHistory = (history ?? []).map((entry: { role: string; parts: { text: string }[] }) => ({
      role: entry.role,
      parts: entry.parts,
    }));

    const body = {
      systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
      contents: [
        ...vertexHistory,
        { role: 'user', parts: [{ text: message }] },
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
