import Link from "next/link"
import PostCardProps from "../postCard"
import Moment from "react-moment"
import 'moment-timezone';

const PostCard = ({ post }: PostCardProps) => {
  const { title, date, description, slug } = post
  return (
    <div className="border-b-[1px] last:border-none py-8 mb-8 md:mb-0 hover:opacity-75">
      <Link href={`/blog/${slug}`}>
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-serif font-bold">{title}</h2>
      </Link>
      <small className="text-gray-700 dark:text-gray-300 opacity-80">
        {date}
      </small>
      <p className="text-sm md:text-lg 2xl:text-xl font-serif mt-4">{description}</p>
    </div>
  )
}

export default PostCard
