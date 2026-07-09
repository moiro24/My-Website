import Breadcrumb from '@/components/Breadcrumb';
import Faq from '@/components/Faq';
import PricingGrids from '@/components/Pricing/PricingGrids';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & Pricing | Moises Rosas',
  description:
    'Available for freelance development, consulting, and project-based work. Flexible engagement models for React development, full-stack solutions, and technical consultation.',
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageTitle='Services & Pricing' />
      <section className='pt-17.5 pb-20 lg:pt-22.5 lg:pb-25 xl:pt-27.5'>
        <PricingGrids />
      </section>

      <Faq />
    </>
  );
};

export default PricingPage;
