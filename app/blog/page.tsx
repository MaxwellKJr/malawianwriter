import Posts from '@/components/Blog/Posts'
import getPostsMetadata from '@/components/getPostMetadata'


const BlogPage = () => {
  const postMetadata = getPostsMetadata()

  return (
    <>
      <div className='w-full sm:w-10/12 max-w-4xl p-4 mx-auto'>
        <h1 className='text-2xl font-black pt-20'>On Writing<span className='text-brand'>.</span></h1>
        <Posts postMetadata={postMetadata} />
      </div>
    </>
  )
}

export default BlogPage
