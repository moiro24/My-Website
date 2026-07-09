import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='relative z-10 border-t border-[var(--portfolio-border)] bg-[var(--footer-bg)] py-10'>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-[var(--footer-text)] sm:px-8 lg:flex-row lg:px-8 lg:text-left'>
        <div className='flex flex-col items-center gap-3 lg:items-start'>
          <Link href='/' className='inline-flex' aria-label='Go to homepage'>
            <Image
              src='/images/logo/HalfLogo.svg'
              alt='Moises Rosas logo'
              width={56}
              height={56}
              className='h-12 w-auto opacity-90 transition-opacity hover:opacity-100'
            />
          </Link>
          <p>
            © 2026 Moises Rosas. Built for software development opportunities.
          </p>
        </div>
        <div className='flex flex-wrap items-center gap-4'>
          <Link
            href='/'
            className='transition hover:text-[var(--footer-hover)]'
          >
            Home
          </Link>
          <Link
            href='/contact'
            className='transition hover:text-[var(--footer-hover)]'
          >
            Email
          </Link>
          <a
            href='https://github.com/moiro24'
            target='_blank'
            rel='noreferrer'
            className='transition hover:text-[var(--footer-hover)]'
          >
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/moises-rosas-a8366b185'
            target='_blank'
            rel='noreferrer'
            className='transition hover:text-[var(--footer-hover)]'
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
