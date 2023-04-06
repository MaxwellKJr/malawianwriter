import Link from "next/link"
import PostCardProps from "../postCard"
import Moment from "react-moment"
import 'moment-timezone';

const PostCard = ({ post }: PostCardProps) => {
  const { title, date, description, slug } = post
  return (
    <div className="border-b-[1px] py-8 mb-8 md:mb-0 hover:opacity-75">
      <Link href={`/blog/${slug}`}>
        <h2 className="text-2xl font-serif font-bold">{title}</h2>
      </Link>
      <small className="text-gray-700">
        {date}
      </small>
      <p className="text-sm font-serif mt-4">{description}</p>
    </div>
  )
}

export default PostCard
