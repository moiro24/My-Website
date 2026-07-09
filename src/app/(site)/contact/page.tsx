import ContactForm from '@/components/Contact/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get in Touch | Moises Rosas',
  description:
    'Reach out to Moises for software development inquiries, collaboration opportunities, or to discuss your project needs. React specialist and full-stack developer.',
};

export default function ContactPage() {
  return <ContactForm />;
}
