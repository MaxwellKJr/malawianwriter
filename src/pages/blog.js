import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Layout from "../components/Layout";
import BlogPosts from "../components/BlogPosts";

const BlogPage = () => {
  // noinspection GraphQLUnresolvedReference
  const data = useStaticQuery(graphql`
      query {
          allSanityPost(sort: { fields: publishedOn, order: DESC }) {
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
        <div className="pt-20">
          <BlogPosts posts={posts}/>
        </div>
      </Layout>
  );
};
export default BlogPage;
