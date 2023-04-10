import fs from 'fs'
import getPostsMetadata from '@/components/getPostMetadata'
import PageWrapper from '@/components/PageWrapper'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import moment from 'moment'
import Tags from '@/components/Blog/Tags'

const getPostContent = (slug: string) => {
  const folder = 'posts/'
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, 'utf8')
  const matterResult = matter(content)

  return matterResult
}

export const generateStaticParams = async () => {
  const posts = getPostsMetadata()

  return posts.map((post) => ({
    slug: post.slug
  }))
}

const PostPage = (props: any) => {
  const slug = props.params.slug
  const post = getPostContent(slug)
  const date = post.data.date

  return (
    <PageWrapper>
      <div className='w-full sm:w-10/12 md:w-2/5 lg:w-[30%] max-w-4xl p-4 sm:px-0 mx-auto mt-[12vh] pt-16'>
        <small className='text-gray-700 dark:text-gray-300 opacity-80'>{moment(date).format('dddd, Do MMMM YYYY')}</small>
        <h1 className='text-2xl sm:text-3xl md:text-4xl text-brand font-black'>{post.data.title}</h1>
        <Tags tags={post.data.tags} />
        <article className="prose prose-zinc prose-sm xl:prose-base 2xl:prose-lg prose-headings:text-brand prose-headings:font-bold prose-h4:text-lg prose-h5:text-xl prose-p:font-Baskerville prose-p:py-2 sm:prose-p:py-0 prose-a:text-brand">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </PageWrapper>
  )
}

export default PostPage 
