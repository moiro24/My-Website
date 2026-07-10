'use client';

import { type ChangeEvent, type FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const CONTACT_COOLDOWN_KEY = 'contactCooldownUntil';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  website: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSending, setIsSending] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const stored = window.localStorage.getItem(CONTACT_COOLDOWN_KEY);
    if (!stored) {
      return;
    }

    const cooldownUntil = Number(stored);
    if (!Number.isFinite(cooldownUntil)) {
      window.localStorage.removeItem(CONTACT_COOLDOWN_KEY);
      return;
    }

    const remaining = Math.ceil((cooldownUntil - Date.now()) / 1000);
    if (remaining > 0) {
      setCooldownSeconds(remaining);
      return;
    }

    window.localStorage.removeItem(CONTACT_COOLDOWN_KEY);
  }, []);

  useEffect(() => {
    if (cooldownSeconds <= 0) {
      window.localStorage.removeItem(CONTACT_COOLDOWN_KEY);
      return;
    }

    const timer = window.setInterval(() => {
      setCooldownSeconds((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [cooldownSeconds]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (cooldownSeconds > 0) {
      toast.error(`Please wait ${cooldownSeconds}s before trying again.`);
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const result = await response.json().catch(() => null);
      const message =
        typeof result === 'string'
          ? result
          : result?.message || 'Unable to send message.';

      if (!response.ok) {
        if (response.status === 429) {
          const retryFromBody = Number(result?.retryAfterSeconds || 0);
          const retryFromHeader = Number(
            response.headers.get('Retry-After') || 0,
          );
          const retryAfter = Math.max(retryFromBody, retryFromHeader, 1);

          const cooldownUntil = Date.now() + retryAfter * 1000;
          window.localStorage.setItem(
            CONTACT_COOLDOWN_KEY,
            String(cooldownUntil),
          );
          setCooldownSeconds(retryAfter);
          toast.error(`Rate limited. Try again in ${retryAfter}s.`);
          setIsSending(false);
          return;
        }

        toast.error(message || 'Unable to send message.');
        setIsSending(false);
        return;
      }

      toast.success('Message sent. I will get back to you soon.');
      setForm(initialState);
      window.localStorage.removeItem(CONTACT_COOLDOWN_KEY);
      router.push('/contact/sent');
    } catch {
      toast.error('Unable to send message right now.');
    } finally {
      setIsSending(false);
    }
  };

  const copyEmail = async () => {
    try {
      setIsCopying(true);
      await navigator.clipboard.writeText('moiro2001@gmail.com');
      toast.success('Email copied to clipboard.');
    } catch {
      toast.error('Could not copy email right now.');
    } finally {
      setIsCopying(false);
    }
  };

  return (
    <section className='px-4 pt-32 pb-24 sm:px-8 lg:px-0 lg:pt-36'>
      <div className='mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]'>
        <div className='rounded-[2rem] border border-[var(--portfolio-border)] bg-[var(--portfolio-surface)] p-8 backdrop-blur-sm'>
          <p className='text-sm tracking-[0.35em] text-[#d2b07a] uppercase'>
            Contact
          </p>
          <h1 className='mt-4 text-4xl font-semibold text-[var(--portfolio-text)] sm:text-5xl'>
            Send me a message
          </h1>
          <p className='mt-5 text-lg leading-8 text-[var(--portfolio-muted)]'>
            Need a developer for your team or project? Send a message and I will
            reply as soon as possible. I am open to software-development
            opportunities where I can contribute and keep growing.
          </p>
          <div className='mt-8 space-y-3 text-sm text-[var(--portfolio-muted)]'>
            <p>Phone: (310) 810-5086</p>
            <div className='flex flex-wrap items-center gap-3'>
              <p>Email: moiro2001@gmail.com</p>
              <button
                type='button'
                onClick={copyEmail}
                disabled={isCopying}
                className='rounded-full border border-[var(--secondary-chip-border)] bg-[var(--secondary-chip-bg)] px-3 py-1 text-xs font-semibold text-[var(--secondary-chip-text)] transition hover:border-[var(--secondary-chip-hover-border)] hover:text-[var(--secondary-chip-hover-text)] disabled:cursor-not-allowed disabled:opacity-60'
              >
                {isCopying ? 'Copying...' : 'Copy email'}
              </button>
            </div>
            <p>GitHub: github.com/moiro24</p>
            <p>LinkedIn: linkedin.com/in/moises-rosas-a8366b185</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className='rounded-[2rem] border border-[var(--portfolio-border)] bg-[var(--portfolio-surface-strong)] p-8'
        >
          <input
            type='text'
            name='website'
            value={form.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete='off'
            className='hidden'
            aria-hidden='true'
          />

          <div className='grid gap-5 sm:grid-cols-2'>
            <div className='sm:col-span-1'>
              <label
                htmlFor='name'
                className='mb-2 block text-sm text-[var(--portfolio-muted)]'
              >
                Name
              </label>
              <input
                id='name'
                name='name'
                value={form.name}
                onChange={handleChange}
                required
                className='w-full rounded-lg border border-[var(--portfolio-border)] bg-[var(--portfolio-surface)] px-4 py-3 text-[var(--portfolio-text)] outline-hidden focus:border-[var(--accent-warm)]/70'
                placeholder='Your name'
              />
            </div>

            <div className='sm:col-span-1'>
              <label
                htmlFor='email'
                className='mb-2 block text-sm text-[var(--portfolio-muted)]'
              >
                Email
              </label>
              <input
                id='email'
                name='email'
                type='email'
                value={form.email}
                onChange={handleChange}
                required
                className='w-full rounded-lg border border-[var(--portfolio-border)] bg-[var(--portfolio-surface)] px-4 py-3 text-[var(--portfolio-text)] outline-hidden focus:border-[var(--accent-warm)]/70'
                placeholder='you@example.com'
              />
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='subject'
                className='mb-2 block text-sm text-[var(--portfolio-muted)]'
              >
                Subject
              </label>
              <input
                id='subject'
                name='subject'
                value={form.subject}
                onChange={handleChange}
                required
                className='w-full rounded-lg border border-[var(--portfolio-border)] bg-[var(--portfolio-surface)] px-4 py-3 text-[var(--portfolio-text)] outline-hidden focus:border-[var(--accent-warm)]/70'
                placeholder='How can I help?'
              />
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='message'
                className='mb-2 block text-sm text-[var(--portfolio-muted)]'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                value={form.message}
                onChange={handleChange}
                required
                rows={7}
                className='w-full rounded-lg border border-[var(--portfolio-border)] bg-[var(--portfolio-surface)] px-4 py-3 text-[var(--portfolio-text)] outline-hidden focus:border-[var(--accent-warm)]/70'
                placeholder='Tell me about your project or opportunity'
              />
            </div>
          </div>

          <button
            type='submit'
            disabled={isSending || cooldownSeconds > 0}
            className='mt-6 rounded-full bg-[var(--cta-bg)] px-8 py-3.5 text-sm font-semibold text-[var(--cta-text)] transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 sm:px-9 sm:py-4'
          >
            {isSending
              ? 'Sending...'
              : cooldownSeconds > 0
                ? `Please wait ${cooldownSeconds}s`
                : 'Send message'}
          </button>

          {cooldownSeconds > 0 && (
            <p className='mt-3 text-sm text-[var(--portfolio-muted)]'>
              Cooldown active. You can submit again in {cooldownSeconds} second
              {cooldownSeconds === 1 ? '' : 's'}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
