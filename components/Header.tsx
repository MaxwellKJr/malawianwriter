import Link from 'next/link';

const Header = () => {
  return (
    <nav className='bg-white p-4 fixed top-0 w-full sm:border-b-[1px]'>
      <div className='flex flex-col sm:flex-row w-full sm:w-10/12 max-w-4xl m-auto justify-center sm:justify-stretch items-center'>
        <Link href={`/`} className='text-3xl font-Dancing-Script text-black hover:text-brand w-full text-center sm:text-left pb-4 sm:pb-0'>
          Malawian Writer <span className='text-brand hover:text-black'>.</span>
        </Link>

        <ul className='flex sm:justify-end justify-center w-full uppercase text-sm border-t-[1px] sm:border-0 pt-4 sm:pt-0'>
          <li>
            <Link href={`/`} className='text-black p-4 hover:text-brand hover:bg-white' title='Read something'>
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
      </div>
    </nav>
  );
};

export default Header;
