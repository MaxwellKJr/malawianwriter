import Posts from '@/components/Blog/Posts'
import PageWrapper from '@/components/PageWrapper'
import getPostsMetadata from '@/components/getPostMetadata'

export const metadata = {
  title: 'Malawian Writer on Writing | Blog',
}

const BlogPage = () => {
  const postMetadata = getPostsMetadata()

  return (
    <PageWrapper>
      <main className='mt-[12vh] pt-16'>
        <div className='w-full sm:w-10/12 max-w-4xl p-4 mx-auto'>
          <h1 className='text-2xl font-black text-center mb-16'>On Writing<span className='text-brand'>.</span></h1>
          <Posts postMetadata={postMetadata} />
        </div>
      </main>
    </PageWrapper>
  )
}

export default BlogPage
