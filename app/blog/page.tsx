import Posts from '@/components/Blog/Posts'
import PageWrapper from '@/components/PageWrapper'
import getPostsMetadata from '@/components/getPostMetadata'

export const metadata = {
  title: 'Malawian Writer on Writing 🇲🇼 | Blog',
  description: 'The Malawian Writer shares everything regarding writing and storytelling in generally, favorite books, recommendations and in search of the next GREAT story.'
}

const BlogPage = () => {
  const postMetadata = getPostsMetadata()

  return (
    <PageWrapper>
      <main className='mt-[12vh] pt-16'>
        <div className='w-full sm:w-10/12 max-w-4xl p-4 lg:p-0 mx-auto'>
          <div className='mb-8 lg:mb-16'>
            <h1 className='text-2xl font-black text-center py-4 font-Dancing-Script'>On Writing<span className='text-brand'>.</span></h1>
            <p className='font-normal dark:font-light text-center'><em>&ldquo;Here I talk about all things writing and storytelling-from books, poetry, music to movies.&rdquo;</em></p>
          </div>
          <Posts postMetadata={postMetadata} />
        </div>
      </main>
    </PageWrapper>
  )
}

export default BlogPage
