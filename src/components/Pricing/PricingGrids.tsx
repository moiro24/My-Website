import SectionTitle from '../Common/SectionTitle';
import SinglePricing from './SInglePricing';
import { pricingData } from '../../../stripe/pricingData';

const PricingGrids = () => {
  return (
    <div>
      <div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
        <SectionTitle
          title='How I Work'
          paragraph='Available for contract work, consulting, and full-time opportunities. Flexible engagement models tailored to project scope and timeline.'
          hideBadge={true}
        />
        <div className='grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3'>
          {pricingData &&
            pricingData.map((price, key) => (
              <SinglePricing price={price} key={key} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PricingGrids;
