import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <nav>
      <div className='container flex justify-between items-center'>
        <Link href={`/`} className='text-2xl font-bold text-brand'>
          Malawian Writer
        </Link>
        <ul className='flex'>
          <li>
            <Link href={`/`}>Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
