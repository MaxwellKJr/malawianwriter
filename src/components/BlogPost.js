import React from "react";
import {Link} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import {motion} from "framer-motion";

const item = {
  hidden: {opacity: 0},
  show: {opacity: 1},
};

const BlogPost = ({post}) => {
  const {title, description, slug, cover, tags, publishedOn} = post;

  return (
      <motion.div
          variant={item}
          className="rounded-md relative bg-black bg-opacity-50 text-white lg:hover:scale-95 transition-all ease-in-out mb-16 hover:cursor-default">
        <Link to={`/blog/${slug.current}`}>
          <GatsbyImage
              image={getImage(cover.asset)}
              alt={title}
              blurDataURL
              title={title}
              className="rounded-md rounded-b-none hover:opacity-75 transition"
          />
        </Link>
        <div className="p-4">
          <Link to={`/blog/${slug.current}`}>
            <h3 className="text-2xl font-black font-poppins">{title}</h3>
          </Link>
          <p className="py-4 text-sm text-zinc-300">{description}</p>
          {tags.map(tag => (
              <small className="bg-black bg-opacity-75 inline-block mr-1 px-2 rounded-lg text-primary text-xs">
                {tag}
              </small>
          ))}
          <hr className="my-2 opacity-50"/>
          <small className="mb-8 inline-block">
            {publishedOn}
          </small>
          <br/>
          <Link to={`/blog/${slug.current}`}
                className="bg-primary -bottom-6 absolute rounded-3xl text-black text-sm uppercase mb-2 inline-block py-2 px-6 hover:text-black hover:bg-white">
            Read More
          </Link>
        </div>
      </motion.div>
  );
};

export default BlogPost;
