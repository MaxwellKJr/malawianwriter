import React from "react";
import PostCard from "./PostCard";

interface PostsProps {
  postMetadata: Array<{
    title: string;
    date: string;
    description: string;
    slug: string;
    tags: [];
  }>;
}

const Posts = ({ postMetadata }: PostsProps) => {
  return (
    <section className="flex flex-col md:grid md:grid-cols-2 md:gap-4 w-full h-full">
      {postMetadata.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </section>
  );
};

export default Posts;
