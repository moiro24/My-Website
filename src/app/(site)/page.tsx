import DeveloperPortfolio from '@/components/Portfolio/DeveloperPortfolio';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Moises Rosas | Full-Stack Developer & React Specialist',
  description:
    'Full-stack developer bringing military precision, diagnostic expertise, and React mastery to clean, reliable web applications. Marine Corps leadership. Vehicle diagnostics background. JavaScript & React portfolio.',
  keywords: [
    'React',
    'JavaScript',
    'Full-Stack Developer',
    'Web Development',
    'Marine Corps',
  ],
  openGraph: {
    title: 'Moises Rosas | Full-Stack Developer',
    description:
      'Building thoughtful web experiences with React and JavaScript. Marine Corps leadership meets diagnostic precision.',
    url: 'https://moisesrosas.dev',
    type: 'website',
    images: [
      {
        url: 'https://moisesrosas.dev/images/og-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Moises Rosas - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moises Rosas | Full-Stack Developer',
    description:
      'Building thoughtful web experiences with React and JavaScript.',
    images: ['https://moisesrosas.dev/images/og-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return <DeveloperPortfolio />;
}
