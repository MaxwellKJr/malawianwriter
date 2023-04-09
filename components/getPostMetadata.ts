import fs from 'fs'
import matter from 'gray-matter'
import { PostMetadata } from './PostMetadata'

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
      tags: matterResult.data.tags
    }
  })

  return posts
}

export default getPostsMetadata
