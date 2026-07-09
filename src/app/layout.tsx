import '@/styles/animate.css';
import '@/styles/prism-vsc-dark-plus.css';
import '@/styles/star.css';
import '@/styles/tailwind.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import { Plus_Jakarta_Sans } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import AuthProvider from './context/AuthContext';
import ToasterContext from './context/ToastContext';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={plusJakarta.className}
      data-theme='dark'
      data-theme-mode='dark'
    >
      <head>
        <link
          rel='icon'
          href='/images/logo/HalfLogo.svg'
          type='image/svg+xml'
        />
        <link rel='apple-touch-icon' href='/images/logo/HalfLogo.svg' />
        <meta name='theme-color' content='#030014' />
      </head>
      <body>
        <div className='isolate'>
          <NextTopLoader
            color='#8646F4'
            crawlSpeed={300}
            showSpinner={false}
            shadow='none'
          />

          <AuthProvider>
            <Header />
            {children}
            <Footer />

            <ToasterContext />
          </AuthProvider>
        </div>

        <ScrollToTop />
      </body>
    </html>
  );
}
