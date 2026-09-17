import { Resend } from 'resend';

export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY);

const FIELD_LIMITS: Record<string, number> = {
  name: 100,
  email: 254,
  business: 150,
  projectNeed: 2000,
  projectType: 100,
  budget: 100,
  timeline: 100,
  businessStage: 100,
  currentStack: 300,
  hasDesigns: 50,
  referral: 100,
};

const VALID_BUDGETS = new Set([
  '$10,000 – $25,000',
  '$25,000 – $50,000',
  '$50,000 – $100,000',
  '$100,000+',
  'Not sure yet — need scoping',
]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SAFE_FILENAME_RE = /[^a-zA-Z0-9._-]/g;

function sanitize(value: unknown, maxLen: number): string {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[\r\n\t]/g, ' ')   // strip control chars (log injection)
    .replace(/<[^>]*>/g, '')      // strip HTML tags (XSS)
    .trim()
    .slice(0, maxLen);
}

function sanitizeLog(value: string): string {
  return value.replace(/[\r\n]/g, ' ').slice(0, 200);
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();

    const formType    = sanitize(form.get('formType'),    20);
    const name        = sanitize(form.get('name'),        FIELD_LIMITS.name);
    const email       = sanitize(form.get('email'),       FIELD_LIMITS.email);
    const business    = sanitize(form.get('business'),    FIELD_LIMITS.business);
    const projectNeed = sanitize(form.get('projectNeed'), FIELD_LIMITS.projectNeed);

    if (!name || !email || !business || !projectNeed) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) {
      return Response.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const isCustomBuild = formType === 'custom-build';

    const projectType   = sanitize(form.get('projectType'),   FIELD_LIMITS.projectType);
    const budget        = sanitize(form.get('budget'),        FIELD_LIMITS.budget);
    const timeline      = sanitize(form.get('timeline'),      FIELD_LIMITS.timeline);
    const businessStage = sanitize(form.get('businessStage'), FIELD_LIMITS.businessStage);
    const currentStack  = sanitize(form.get('currentStack'),  FIELD_LIMITS.currentStack);
    const hasDesigns    = sanitize(form.get('hasDesigns'),    FIELD_LIMITS.hasDesigns);
    const referral      = sanitize(form.get('referral'),      FIELD_LIMITS.referral);

    if (isCustomBuild) {
      if (!projectType || !budget || !timeline || !businessStage) {
        return Response.json({ error: 'Missing required project fields' }, { status: 400 });
      }
      if (!VALID_BUDGETS.has(budget)) {
        return Response.json({ error: 'Invalid budget selection' }, { status: 400 });
      }
    }

    const files = form.getAll('attachments') as File[];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const attachments: any[] = [];
    let safeFilename = '';
    for (const file of files) {
      if (!file || file.size === 0) continue;
      if (file.type !== 'application/pdf') {
        return Response.json({ error: `"${sanitize(file.name, 100)}" is not a PDF` }, { status: 400 });
      }
      if (file.size > 5 * 1024 * 1024) {
        return Response.json({ error: `"${sanitize(file.name, 100)}" exceeds the 5MB limit` }, { status: 400 });
      }
      safeFilename = file.name.replace(SAFE_FILENAME_RE, '_');
      const buffer = await file.arrayBuffer();
      const bytes = new Uint8Array(buffer);
      let binary = '';
      for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
      attachments.push({ filename: safeFilename, content: btoa(binary) });
    }

    const response = await resend.emails.send({
      from: 'noreply@majestikmagik.dev',
      to: 'contact@majestikmagik.dev',
      subject: isCustomBuild ? `New Custom Build Brief from ${name}` : `New Quote Request from ${name}`,
      replyTo: email,
      attachments,
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px;">
          <h2 style="color: #4f46e5;">${isCustomBuild ? 'Custom Build Project Brief' : 'New Quote Request'}</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
            <p style="margin: 8px 0;"><strong>Business:</strong> ${escapeHtml(business)}</p>
            ${isCustomBuild ? `
            <p style="margin: 8px 0;"><strong>Project Type:</strong> ${escapeHtml(projectType)}</p>
            <p style="margin: 8px 0;"><strong>Budget:</strong> ${escapeHtml(budget)}</p>
            <p style="margin: 8px 0;"><strong>Timeline:</strong> ${escapeHtml(timeline)}</p>
            <p style="margin: 8px 0;"><strong>Business Stage:</strong> ${escapeHtml(businessStage)}</p>
            ${currentStack ? `<p style="margin: 8px 0;"><strong>Current Stack:</strong> ${escapeHtml(currentStack)}</p>` : ''}
            ${hasDesigns ? `<p style="margin: 8px 0;"><strong>Has Designs:</strong> ${escapeHtml(hasDesigns)}</p>` : ''}
            ${referral ? `<p style="margin: 8px 0;"><strong>Referral Source:</strong> ${escapeHtml(referral)}</p>` : ''}
            ` : ''}
          </div>
          <div style="margin: 20px 0;">
            <p style="margin: 8px 0; font-weight: bold;">Project Description:</p>
            <p style="white-space: pre-wrap; color: #555;">${escapeHtml(projectNeed)}</p>
          </div>
          ${attachments.length ? `<p style="color:#4f46e5; font-size:13px;">📎 Attachments: ${attachments.map((a) => escapeHtml(a.filename)).join(', ')}</p>` : ''}
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
          <p style="font-size: 12px; color: #999;">Sent from the Majestik Magik website ${isCustomBuild ? 'custom build intake form' : 'contact form'}.</p>
        </div>
      `,
    });

    if (response.error) {
      console.error('Resend error:', sanitizeLog(JSON.stringify(response.error)));
      return Response.json({ error: 'Failed to send email' }, { status: 500 });
    }

    await resend.emails.send({
      from: 'noreply@majestikmagik.dev',
      to: email,
      subject: 'We received your quote request',
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px;">
          <h2 style="color: #4f46e5;">Thanks for reaching out!</h2>
          <p>Hi ${escapeHtml(name)},</p>
          <p>We received your request and will get back to you within 24 hours.</p>
          <p>In the meantime, feel free to check out our <a href="https://majestikmagik.dev" style="color: #4f46e5;">latest work</a>.</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
          <p style="font-size: 12px; color: #999;">Majestik Magik • Web Engineering & Digital Growth</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', sanitizeLog(String(error)));
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
