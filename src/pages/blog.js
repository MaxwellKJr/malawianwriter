import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import {motion} from 'framer-motion'
import Layout from "../components/Layout";
import BlogPosts from "../components/BlogPosts";

const BlogPage = () => {
  // noinspection GraphQLUnresolvedReference
  const data = useStaticQuery(graphql`
      query {
          allSanityPost(sort: { publishedOn: DESC }) {
              nodes {
                  id
                  publishedOn(formatString: "MMMM DD, YYYY")
                  tags
                  title
                  description
                  slug {
                      current
                  }
                  cover {
                      asset {
                          gatsbyImageData(
                              aspectRatio: 1.5
                              placeholder: BLURRED
                              formats: [AUTO, WEBP, AVIF]
                          )
                      }
                  }
              }
          }
      }
  `)

  const posts = data.allSanityPost.nodes

  return (
      <Layout>
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}>
          <BlogPosts posts={posts}/>
        </motion.div>
      </Layout>
  );
};
export default BlogPage;
