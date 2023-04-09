import Link from "next/link"
import PostCardProps from "../postCard"
import moment from 'moment'
import Moment from "react-moment"
import 'moment-timezone';

const PostCard = ({ post }: PostCardProps) => {
  const { title, date, description, slug, tags } = post

  return (
    <div className="border-b-[1px] last:border-none dark:border-gray-300 dark:border-opacity-20 pt-8 pb-16 md:pb-8 mb-8 md:mb-0 hover:opacity-75 transition-all ease-in-out duration-300">
      <Link href={`/blog/${slug}`}>
        <h2 className="text-brand dark:hover:text-gray-300 text-2xl md:text-3xl 2xl:text-4xl font-serif font-bold">{title}</h2>
      </Link>
      <small className="text-gray-700 dark:text-gray-300 opacity-80">
        {/* <Moment>{date}</Moment> */}
        Sundary, 9th April, 2023
      </small>
      <p className="text-sm md:text-lg 2xl:text-xl font-serif text-zinc-800 mt-4">{description}</p>
      <ul className="flex mt-4">
        {tags.map((tag) => (
          <li className="inline-block first:ml-0 mx-[3px] px-2 bg-zinc-800 dark:bg-gray-300 dark:text-zinc-800 rounded-xl text-white text-[10px]">
            {tag}
          </li>
        ))
        }</ul>
    </div>
  )
}

export default PostCard
