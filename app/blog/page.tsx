import fs from 'fs'
import Link from 'next/link'
import matter from 'gray-matter'
import Posts from '@/components/Blog/Posts'
import { PostMetadata } from '@/components/PostMetadata'

const getPostsMetadata = (): PostMetadata[] => {
  const folder = "posts/"
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter((file) => file.endsWith(".md"))

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, `utf8`)
    const matterResult = matter(fileContents)

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      slug: fileName.replace(".md", ""),
    }
  })

  return posts
}

const BlogPage = () => {
  const postMetadata = getPostsMetadata()
  // const postPreviews = postMetadata.map((post) => (
  //   <Link href={`/blog/${post.slug}`}>
  //     <h2>{post.title}</h2>
  //   </Link>
  // ))

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
