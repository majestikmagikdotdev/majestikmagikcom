import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, business, projectNeed } = await request.json();

    // Validate required fields
    if (!name || !email || !business || !projectNeed) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email via Resend
    const response = await resend.emails.send({
      from: 'noreply@majestikmagik.dev',
      to: 'contact@majestikmagik.dev',
      subject: `New Quote Request from ${name}`,
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px;">
          <h2 style="color: #4f46e5;">New Quote Request</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
            <p style="margin: 8px 0;"><strong>Business:</strong> ${escapeHtml(business)}</p>
          </div>
          <div style="margin: 20px 0;">
            <p style="margin: 8px 0; font-weight: bold;">Project Need:</p>
            <p style="white-space: pre-wrap; color: #555;">${escapeHtml(projectNeed)}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
          <p style="font-size: 12px; color: #999;">This email was sent from your Majestik Magik website contact form.</p>
        </div>
      `,
      replyTo: email,
    });

    if (response.error) {
      console.error('Resend error:', response.error);
      return Response.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Also optionally send a confirmation email to the user
    await resend.emails.send({
      from: 'noreply@majestikmagik.dev',
      to: email,
      subject: 'We received your quote request',
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px;">
          <h2 style="color: #4f46e5;">Thanks for reaching out!</h2>
          <p>Hi ${escapeHtml(name)},</p>
          <p>We received your request and will get back to you within 24 hours at this email address or by phone.</p>
          <p>In the meantime, feel free to check out our <a href="https://majestikmagik.dev" style="color: #4f46e5;">latest work</a>.</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
          <p style="font-size: 12px; color: #999;">Majestik Magik • Web Engineering & Digital Growth</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}

// Simple HTML escape to prevent XSS
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
