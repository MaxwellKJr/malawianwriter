import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'

const getPostContent = (slug: string) => {
  const folder = 'posts/'
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, 'utf8')
  const matterResult = matter(content)

  return matterResult.content
}

const PostPage = (props: any) => {
  const slug = props.params.slug
  const content = getPostContent(slug)

  return (
    <section className='w-full sm:w-10/12 md:w-2/5 lg:w-[30%] max-w-4xl p-4 sm:p-0 mx-auto mt-[12vh] pt-16'>
      <h1 className='text-2xl text-brand font-black'>This is the Post Page</h1>
      <article class="prose prose-xs">
        <Markdown>{content}</Markdown>
      </article>
    </section>
  )
}

export default PostPage 
