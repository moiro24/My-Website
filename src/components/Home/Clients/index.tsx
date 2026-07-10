'use client';
// Clients component not used in portfolio
import SingleClient from './SingleClient';
import clientsData from './clientsData';

const Clients = () => {
  return (
    <section className='py-19'>
      <div className='mx-auto max-w-[1104px] px-4 sm:px-8 xl:px-0'>
        <div className='relative z-10 overflow-hidden'>
          <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
            {clientsData.map((client) => (
              <div key={client.id}>
                <SingleClient client={client} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
