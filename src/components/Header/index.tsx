'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import DropDown from './DropDown';
import menuData from './menuData';

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleStickyMenu);
  });

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-1000 w-full ${
          stickyMenu
            ? 'before:features-row-border bg-[var(--header-bg-sticky)] py-4! shadow-sm backdrop-blur-lg transition duration-100 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full lg:py-0!'
            : 'py-7 lg:py-0'
        }`}
      >
        <div className='relative mx-auto max-w-[1170px] items-center justify-between px-4 sm:px-8 lg:flex xl:px-0'>
          <div className='flex w-full items-center justify-between lg:w-1/4'>
            <Link
              href='/'
              className='group inline-flex items-center'
              aria-label='Go to homepage'
            >
              <Image
                src='/images/logo/HalfLogo.svg'
                alt='Moises Rosas logo'
                width={52}
                height={52}
                className='block h-12 w-auto transition-opacity group-hover:opacity-90'
                priority
              />
            </Link>

            <button
              onClick={() => setNavigationOpen(!navigationOpen)}
              className='block lg:hidden'
            >
              <span className='relative block h-5.5 w-5.5 cursor-pointer'>
                <span className='du-block absolute right-0 h-full w-full'>
                  <span
                    className={`relative top-0 left-0 my-1 block h-0.5 rounded-sm bg-[var(--header-icon)] delay-0 duration-200 ease-in-out ${
                      !navigationOpen ? 'w-full! delay-300' : 'w-0'
                    }`}
                  ></span>
                  <span
                    className={`relative top-0 left-0 my-1 block h-0.5 rounded-sm bg-[var(--header-icon)] delay-150 duration-200 ease-in-out ${
                      !navigationOpen ? 'w-full! delay-400' : 'w-0'
                    }`}
                  ></span>
                  <span
                    className={`relative top-0 left-0 my-1 block h-0.5 rounded-sm bg-[var(--header-icon)] delay-200 duration-200 ease-in-out ${
                      !navigationOpen ? 'w-full! delay-500' : 'w-0'
                    }`}
                  ></span>
                </span>
                <span className='du-block absolute right-0 h-full w-full rotate-45'>
                  <span
                    className={`absolute top-0 left-2.5 block h-full w-0.5 rounded-sm bg-[var(--header-icon)] delay-300 duration-200 ease-in-out ${
                      !navigationOpen ? 'h-0! delay-0' : 'h-full'
                    }`}
                  ></span>
                  <span
                    className={`absolute top-2.5 left-0 block h-0.5 w-full rounded-sm bg-[var(--header-icon)] delay-400 duration-200 ease-in-out ${
                      !navigationOpen ? 'h-0! delay-200' : 'h-0.5'
                    }`}
                  ></span>
                </span>
              </span>
            </button>
          </div>

          <div
            className={`invisible h-0 w-full items-center justify-between lg:visible lg:flex lg:h-auto lg:w-3/4 ${
              navigationOpen
                ? 'visible! relative mt-4 h-auto! max-h-[400px] overflow-y-scroll rounded-md bg-[var(--header-mobile-bg)] p-7.5 shadow-lg'
                : ''
            }`}
          >
            <nav>
              <ul className='flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-2'>
                {menuData.map((menuItem, key) => (
                  <li
                    key={key}
                    className={`nav__menu group relative ${
                      stickyMenu ? 'lg:py-4' : 'lg:py-7'
                    }`}
                  >
                    {menuItem.submenu ? (
                      <>
                        <DropDown menuItem={menuItem} />
                      </>
                    ) : (
                      <Link
                        href={`${menuItem.path}`}
                        className={`relative border px-4 py-1.5 text-sm transition ${
                          pathUrl === menuItem.path
                            ? 'border-[var(--header-nav-active-border)] bg-[var(--header-nav-active-bg)] text-[var(--header-nav-active-text)]'
                            : 'border-transparent text-[var(--header-nav-idle)] hover:border-[var(--header-nav-hover-border)] hover:text-[var(--header-nav-hover-text)]'
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className='mt-7 flex items-center gap-6 lg:mt-0'>
              <Link
                href='/contact'
                className='rounded-full border border-[var(--secondary-chip-border)] bg-[var(--secondary-chip-bg)] px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold tracking-[0.12em] text-[var(--secondary-chip-text)] uppercase transition hover:border-[var(--secondary-chip-hover-border)] hover:text-[var(--secondary-chip-hover-text)]'
              >
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
