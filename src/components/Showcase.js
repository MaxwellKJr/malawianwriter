import React from 'react';

const Showcase = () => {
  return (
      <section
          className="w-full mx-auto h-screen bg-gradient-to-bl from-gray-800 to-secondary text-black">
        <div
            className="w-full px-5 pb-20 pt-40 sm:pt-24 md:px-0 md:w-3/4 h-full flex flex-col lg:flex-row justify-center items-center mx-auto max-w-screen-lg">
          <div className={`flex-grow-1`}>
            <h1 className="text-4xl font-bold underline text-primary">Hello world!</h1>
            <p className="text-white my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
              architecto
              culpa ea eaque eos fuga agni numquam quas quidem reprehenderit. Dolores eveniet ex, excepturi libero omnis
              perspiciatis tempore
              veniam. Earum?</p>
          </div>
        </div>
      </section>
  );
};

export default Showcase;
