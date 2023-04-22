import React from 'react'

const Tags = ({ tags }: any) => {
  return (
    <ul className="flex mt-4">
      {tags.map((tag: string) => (
        <li key={tag} className="inline-block first:ml-0 mx-[3px] px-2 bg-zinc-800 dark:bg-gray-300 dark:text-zinc-800 rounded-xl text-white text-[10px]">
          {tag}
        </li>
      ))
      }</ul>
  )
}

export default Tags
