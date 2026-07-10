import Image from 'next/image';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section>
      <div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
        <div className='cta-box-gradient bg-dark relative z-999 overflow-hidden rounded-[30px] px-4 py-20 lg:py-25'>
          {/* <!-- bg shapes --> */}

          <div className='absolute bottom-0 left-0 -z-1 h-full w-full bg-[url(/images/cta/grid.svg)] bg-cover bg-bottom bg-no-repeat'></div>

          <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
            <span className='absolute bottom-0 left-1/2 -z-1 aspect-530/253 max-w-[530px] -translate-x-1/2'>
              <Image
                src='/images/blur/blur-24.svg'
                alt='blur-sm'
                fill
                className='max-w-none'
              />
            </span>
          </div>

          {/* <!-- stars --> */}
          <div className='absolute -bottom-25 left-1/2 -z-1 h-60 w-full max-w-[482px] -translate-x-1/2 overflow-hidden'>
            <div className='stars'></div>
            <div className='stars2'></div>
          </div>

          <div className='text-center'>
            <span className='hero-subtitle-gradient relative mb-4 inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-medium'>
              <Image
                src='/images/hero/icon-title.svg'
                alt='icon'
                width={17}
                height={16}
              />

              <span className='hero-subtitle-text'>Let's talk</span>
            </span>
            <h2 className='xl:text-heading-2 mb-4.5 text-2xl font-extrabold text-white sm:text-4xl'>
              Ready to build something great?
            </h2>
            <p className='mx-auto mb-9 max-w-[714px] font-medium'>
              Whether you need a React developer, technical consultation, or a
              fresh perspective on a project, I'm here to help.
            </p>

            <Link
              href='/contact'
              className='hero-button-gradient inline-flex rounded-lg px-8 py-3 sm:px-9 sm:py-3.5 font-medium text-white duration-300 ease-in hover:opacity-80'
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
