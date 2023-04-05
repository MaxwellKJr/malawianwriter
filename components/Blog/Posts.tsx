import React from 'react'
import PostCard from './PostCard'

interface PostsProps {
  postMetadata: Array<{
    title: string
    date: string
    description: string
    slug: string
  }>
}

const Posts = ({ postMetadata }: PostsProps) => {
  return (
    <div className='flex flex-col md:grid md:grid-cols-2 md:gap-4 w-full h-full'>
      {
        postMetadata.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))
      }
    </div>
  )
}

export default Posts
