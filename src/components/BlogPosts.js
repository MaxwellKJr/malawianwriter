import React from "react";
import BlogPost from "./BlogPost";
import {motion} from "framer-motion";

const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      delayChildren: 2,
      type: "tween",
    },
  },
};

const BlogPosts = ({posts}) => {
  return (
      <section
          className="flex flex-col w-full m-auto bg-gradient-to-bl from-gray-800 to-secondary text-black">
        <div
            className="w-full px-5 pb-20 pt-40 sm:pt-24 md:px-0 md:w-3/4 h-full flex flex-col justify-center items-center mx-auto max-w-screen-lg">
          <div>
            <h1 className="text-2xl my-16 md:text-4xl text-white font-black font-baskerville text-center uppercase">
              <em>Posts</em>
            </h1>

            <div className="">
              {/* blog posts */}
              <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-8 my-4 font-poppins"
              >
                {posts &&
                    posts.map((post) => {
                      return <BlogPost key={post.id} post={post}/>;
                    })}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default BlogPosts;
