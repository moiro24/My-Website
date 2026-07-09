import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Message Sent | Moises Rosas',
  description: 'Confirmation page after sending a contact message.',
};

export default function ContactSentPage() {
  return (
    <section className='px-4 pt-32 pb-24 sm:px-8 lg:px-8 lg:pt-36'>
      <div className='mx-auto max-w-3xl rounded-[2rem] border border-[var(--portfolio-border)] bg-[var(--portfolio-surface)] p-10 text-center backdrop-blur-sm'>
        <p className='text-sm tracking-[0.35em] text-[#d2b07a] uppercase'>
          Message sent
        </p>
        <h1 className='mt-4 text-4xl font-semibold text-[var(--portfolio-text)] sm:text-5xl'>
          Thank you for reaching out
        </h1>
        <p className='mt-5 text-lg leading-8 text-[var(--portfolio-muted)]'>
          Your message has been delivered. I will respond as soon as possible.
        </p>

        <div className='mt-8 flex flex-wrap justify-center gap-4'>
          <Link
            href='/'
            className='rounded-full bg-[var(--cta-bg)] px-6 py-3 text-sm font-semibold text-[var(--cta-text)] transition hover:scale-[1.02]'
          >
            Back to home
          </Link>
          <Link
            href='/contact'
            className='rounded-full border border-[var(--secondary-chip-border)] bg-[var(--secondary-chip-bg)] px-6 py-3 text-sm font-semibold text-[var(--secondary-chip-text)] backdrop-blur-sm transition hover:border-[var(--secondary-chip-hover-border)] hover:text-[var(--secondary-chip-hover-text)]'
          >
            Send another message
          </Link>
        </div>
      </div>
    </section>
  );
}
