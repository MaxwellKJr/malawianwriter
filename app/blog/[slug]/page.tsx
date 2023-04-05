import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import getPostsMetadata from '@/components/getPostMetadata'

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

  return (
    <section className='w-full sm:w-10/12 md:w-2/5 lg:w-[30%] max-w-4xl p-4 sm:p-0 mx-auto mt-[12vh] pt-16'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl text-brand font-black'>{post.data.title}</h1>
      <small>{post.data.date}</small>
      <article className="prose prose-zinc prose-sm md:prose-base prose-headings:text-brand prose-headings:font-bold prose-h4:text-xl prose-h5:text-2xl prose-p:font-serif prose-a:text-brand">
        <Markdown>{post.content}</Markdown>
      </article>
    </section>
  )
}

export default PostPage 
