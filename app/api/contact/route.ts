import { NextResponse } from 'next/server';
import { contactRequestSchema } from '@/lib/schemas';
import { business } from '@/lib/site';

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: 'Invalid contact request', errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFromEmail = process.env.RESEND_FROM_EMAIL ?? 'Doon Home Care Services <onboarding@resend.dev>';

  const leadText = [
    `Name: ${parsed.data.name}`,
    `Email: ${parsed.data.email}`,
    `Phone: ${parsed.data.phone || 'Not provided'}`,
    '',
    parsed.data.message
  ].join('\n');

  if (resendApiKey) {
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: resendFromEmail,
        to: [business.leadInboxEmail],
        subject: `New contact lead from ${parsed.data.name}`,
        text: leadText,
        reply_to: parsed.data.email
      })
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      return NextResponse.json(
        {
          message: 'Failed to send email via Resend',
          details: errorText
        },
        { status: 502 }
      );
    }
  } else {
    const smtpHost = process.env.SMTP_HOST;
    if (!smtpHost) {
      return NextResponse.json(
        { message: 'Email service is not configured. Set RESEND_API_KEY or SMTP_* env vars.' },
        { status: 500 }
      );
    }

    try {
      const nodemailer = await import('nodemailer');
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587,
        secure: process.env.SMTP_SECURE === 'true' || process.env.SMTP_PORT === '465',
        auth: process.env.SMTP_USER
          ? {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS
            }
          : undefined
      });

      const fromAddress = process.env.SMTP_FROM ?? `Doon Home Care Services <no-reply@${smtpHost}>`;

      await transporter.sendMail({
        from: fromAddress,
        to: business.leadInboxEmail,
        subject: `New contact lead from ${parsed.data.name}`,
        text: leadText,
        replyTo: parsed.data.email
      });
    } catch (error) {
      return NextResponse.json(
        { message: 'Failed to send email via SMTP', error: String(error) },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({ message: 'Contact request sent successfully' });
}
