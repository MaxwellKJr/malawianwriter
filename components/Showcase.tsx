import React from 'react';

const Showcase = () => {
  return (
    <section className='flex flex-col w-full h-[90vh] justify-center items-center mx-auto px-4 bg-zigzag bg-repeat bg-cover bg-center'>
      <div className='text-left w-full sm:w-10/12 max-w-4xl mx-auto'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-black dark:text-white font-Poppins'>
          A writer, <span>fiending <br className='hidden lg:block' />
            for <span className='text-brand'>great</span> stories</span>
          <span className='text-brand'>.</span></h1>
        <p className='font-Baskerville text-sm sm:text-md text-slate-800 mt-4 lg:max-w-md'>
          {`It all started with Harry Potter and The Sorcerer's Stone and the rest is, well... history.`}
        </p>
      </div>
    </section>
  );
};

export default Showcase;
