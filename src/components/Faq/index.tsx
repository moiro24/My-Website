'use client';
import { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import SingleFaq from './SingleFaq';
import faqData from './faqData';

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqToggle = (id: number) => {
    activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
  };

  return (
    <section className='relative overflow-hidden pt-20 pb-17.5 lg:pt-25 lg:pb-22.5 xl:pb-27.5'>
      {/* <!-- divider --> */}
      <div className='about-divider-gradient absolute top-0 left-1/2 h-[1px] w-full max-w-[1170px] -translate-x-1/2'></div>

      <div className='mx-auto max-w-[770px] px-4 sm:px-8 xl:px-0'>
        <SectionTitle
          title='Questions?'
          paragraph='Find answers about my development process, experience, and how I approach building clean, reliable web applications.'
          hideBadge={true}
        />

        <div>
          {faqData.map((faq: any, key: number) => (
            <SingleFaq
              key={key}
              faqData={{ ...faq, activeFaq, handleFaqToggle }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
