import React from 'react'
import PostCard from './PostCard'

const Posts = ({ postMetadata }) => {
  return (
    <div className='flex flex-col md:grid md:grid-cols-2 md:gap-4 w-full h-full'>
      {
        postMetadata.map((post) => (
          <PostCard post={post} />
        ))
      }
    </div>
  )
}

export default Posts
