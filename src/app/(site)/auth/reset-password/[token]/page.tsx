import Link from 'next/link';

export const metadata = {
  title: 'Reset password',
  description:
    'This portfolio site does not rely on the legacy auth demo flow.',
};

export default async function ResetPasswordPage(props: {
  params: Promise<{ token: string }>;
}) {
  const params = await props.params;

  return (
    <section className='px-4 py-24 sm:px-8 lg:px-8'>
      <div className='mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/8 p-10 text-center backdrop-blur-sm'>
        <p className='text-sm tracking-[0.35em] text-cyan-300 uppercase'>
          Portfolio update
        </p>
        <h1 className='mt-4 text-3xl font-semibold text-white sm:text-4xl'>
          The legacy password reset flow is paused.
        </h1>
        <p className='mt-5 text-lg leading-8 text-white/70'>
          This portfolio focuses on Moises Rosas’s software-development work and
          contact information. Token received: {params.token}
        </p>
        <Link
          href='/'
          className='mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#030014] transition hover:scale-[1.02]'
        >
          Return to portfolio
        </Link>
      </div>
    </section>
  );
}
