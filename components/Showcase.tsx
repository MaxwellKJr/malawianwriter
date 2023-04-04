import React from 'react';

const Showcase = () => {
  return (
    <div className='flex flex-col w-full h-[80vh] sm:h-screen justify-center items-center mx-auto px-4'>
      <div className='text-center sm:text-left w-full sm:w-10/12 mx-auto'>
        <h1 className='text-4xl font-black font-Poppins'>Writing Because I Can.</h1>
        <p className='text-md text-slate-800 mt-4'>
          {`It all started with Harry Potter and The Sorcerer's Stone and the rest is history.`}
        </p>
      </div>
    </div>
  );
};

export default Showcase;
