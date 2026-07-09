import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className='overflow-hidden'>
      <div className='relative mx-auto max-w-[1170px] px-4 py-20 sm:px-8 lg:py-25 xl:px-0'>
        <div className='about-divider-gradient absolute bottom-0 left-0 h-[1px] w-full'></div>

        <div className='flex flex-wrap justify-between gap-11 xl:flex-nowrap'>
          <div className='w-full max-w-[570px]'>
            <span className='hero-subtitle-text mb-5 block font-semibold'>
              Background
            </span>

            <h2 className='xl:text-heading-2 mb-5 text-2xl font-extrabold text-white sm:text-4xl'>
              Marine Corps Leadership + Diagnostics Precision.
            </h2>
            <p className='mb-9 font-medium'>
              Former U.S. Marine Corps Corporal with 4 years of service managing
              transportation logistics and fleet maintenance. Transitioned to
              vehicle diagnostics at Colorado State Patrol, bringing
              troubleshooting rigor and analytical discipline to software
              development. Now building clean, reliable React applications with
              the same attention to detail.
            </p>

            <a
              href='/projects'
              className='hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80'
            >
              View My Work
            </a>
          </div>

          <div className='relative hidden aspect-556/401 w-full xl:block'>
            <Image src='/images/about/about.svg' alt='about' fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
