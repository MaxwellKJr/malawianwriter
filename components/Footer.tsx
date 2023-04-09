const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center border-t-[1px] h-[10vh]'>
      <div className='w-full sm:w-10/12 max-w-4xl text-center md:text-left p-4 mx-auto'>
        <p className='text-xs text-gray-800'>
          &copy; 2023 - Malawian Writer. <br />
          Developed by <a href="https://strugglingprogrammer.netlify.app" className="text-brand font-bold mt-4" target="_blank" rel="noreferrer">Struggling Programmer</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
