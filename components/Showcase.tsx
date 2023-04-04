import React from 'react';

const Showcase = () => {
  return (
    <section className='flex flex-col w-full h-[90vh] justify-center items-center mx-auto px-4'>
      <div className='text-center sm:text-left w-full sm:w-10/12 max-w-4xl mx-auto'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-black font-Poppins'>A writer, fiending for <span className='text-brand'>great</span> stories<span className='text-brand'>.</span></h1>
        <p className='text-sm sm:text-md text-slate-800 mt-4'>
          {`It all started with Harry Potter and The Sorcerer's Stone and the rest is, well... history.`}
        </p>
      </div>
    </section>
  );
};

export default Showcase;
