import React from 'react';
import {motion} from 'framer-motion'
const Showcase = () => {
  return (
      <motion.section
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          className="w-full mx-auto h-screen text-black">
        <div
            className="w-full px-5 pb-20 pt-40 sm:pt-24 md:px-0 md:w-3/4 lg:w-1/3 h-full flex flex-col lg:flex-row justify-center items-center mx-auto max-w-screen-lg">
          <div className={`flex-grow-1 text-center`}>
            <h1 className="text-4xl font-baskerville font-bold text-primary">Let's Talk About <br/> Writing <em>&</em> Books</h1>
            <p className="text-white text-sm my-4 bg-secondary bg-opacity-50">Hi, there. Welcome. <br/>I can not help myself but to talk about books and writing. As the name suggests, I am a Malawian Writer and would love to share all that I know about writing and more.</p>
          </div>
        </div>
      </motion.section>
  );
};

export default Showcase;
