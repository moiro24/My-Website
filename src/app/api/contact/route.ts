import { sendEmail } from '@/libs/email';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

const getClientIp = (request: NextRequest) => {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  const realIp = request.headers.get('x-real-ip');
  return realIp?.trim() || 'unknown';
};

const getRateLimitStatus = (ip: string) => {
  const now = Date.now();
  const existing = rateLimitStore.get(ip);

  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return {
      limited: false,
      retryAfterMs: 0,
    };
  }

  if (existing.count >= RATE_LIMIT_MAX) {
    return {
      limited: true,
      retryAfterMs: Math.max(existing.resetAt - now, 1000),
    };
  }

  existing.count += 1;
  rateLimitStore.set(ip, existing);
  return {
    limited: false,
    retryAfterMs: 0,
  };
};

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  email: z.string().email('Please enter a valid email address.'),
  subject: z.string().min(3, 'Subject is required.'),
  message: z.string().min(15, 'Message must be at least 15 characters.'),
  website: z.string().optional().default(''),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(parsed.error.errors[0].message, { status: 400 });
    }

    const { name, email, subject, message, website } = parsed.data;

    // Honeypot trap: bots tend to fill hidden fields.
    if (website.trim().length > 0) {
      return NextResponse.json(
        { message: 'Message sent successfully.' },
        { status: 200 },
      );
    }

    const ip = getClientIp(request);
    const rateLimit = getRateLimitStatus(ip);
    if (rateLimit.limited) {
      const retryAfterSeconds = Math.ceil(rateLimit.retryAfterMs / 1000);

      return NextResponse.json(
        {
          message: 'Too many requests. Please try again later.',
          retryAfterSeconds,
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(retryAfterSeconds),
          },
        },
      );
    }

    await sendEmail({
      to: 'moiro2001@gmail.com',
      subject: `[Portfolio Contact] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br />')}</p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Message sent successfully.' },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { message: 'Unable to send message right now.' },
      {
        status: 500,
      },
    );
  }
}
