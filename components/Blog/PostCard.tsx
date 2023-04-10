import Link from "next/link"
import PostCardProps from "../postCard"
import moment from 'moment'
import 'moment-timezone';
import Tags from "./Tags";

const PostCard = ({ post }: PostCardProps) => {
  const { title, date, description, slug, tags } = post

  return (
    <div className="border-b-[1px] last:border-none dark:border-gray-300 dark:border-opacity-20 py-8 md:pb-8 md:mb-0 hover:opacity-75 transition-all ease-in-out duration-300">
      <small className="text-gray-700 dark:text-gray-300 opacity-80">
        {moment(date).format('dddd, Do MMMM YYYY')}
      </small>
      <Link href={`/blog/${slug}`}>
        <h2 className="text-brand dark:hover:text-gray-300 text-2xl md:text-3xl 2xl:text-4xl font-serif font-bold">{title}</h2>
      </Link>
      <p className="text-sm md:text-md 2xl:text-lg font-Baskerville text-zinc-800 mt-4">{description}</p>
      <Tags tags={tags} />
    </div>
  )
}

export default PostCard
