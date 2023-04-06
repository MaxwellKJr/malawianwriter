'use client'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null
    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <FontAwesomeIcon icon={faSun} className='w-4 h-4 sm:w-5 sm:h-5 border-[1px] sm:border-2 border-black dark:border-gray-300 rounded-md p-2 select-none hover:cursor-pointer hover:opacity-75'
          role='button' onClick={() => setTheme('light')} />
      )
    } else {
      return (
        <FontAwesomeIcon icon={faMoon} className='w-4 h-4 sm:w-5 sm:h-5 border-[1px] sm:border-2 border-black dark:border-gray-300 rounded-md p-2 select-none hover:cursor-pointer hover:opacity-75' role='button' onClick={() => setTheme('dark')} />
      )
    }
  }

  return (
    <nav className='bg-white dark:bg-black dark:text-gray-300 p-4 fixed top-0 w-full border-b-[1px]'>
      <div className='flex flex-row w-full sm:w-10/12 max-w-4xl m-auto sm:justify-stretch items-center'>
        <Link href={`/`} className='text-3xl font-Dancing-Script text-black hover:text-brand w-full'>
          Malawian Writer <span className='text-brand hover:text-black'>.</span>
        </Link>

        <ul className='hidden lg:flex sm:justify-end justify-center w-full uppercase text-sm border-t-[1px] sm:border-0 pt-4 sm:pt-0'>
          <li>
            <Link href={`/blog`} className='text-black p-4 hover:text-brand hover:bg-white' title='Read something'>
              Blog
            </Link>
          </li>
          <li>
            <Link href={`/`} className='text-black p-4 hover:text-brand hover:bg-white' title='Could be fiction'>
              Stories
            </Link>
          </li>
          <li>
            <Link href={`/`} className='text-black p-4 hover:text-brand hover:bg-white' title='See what I am working on'>
              Current Projects
            </Link>
          </li>
        </ul>
        <div className='flex items-center'>
          <div className='md:hidden mr-2 p-2 hover:cursor-pointer hover:opacity-75'>
            <FontAwesomeIcon icon={faBarsStaggered} className='w-4 h-4 sm:w-5 sm:h-5' />
          </div>
          {renderThemeChanger()}
        </div>
      </div>
    </nav >
  );
};

export default Header;
