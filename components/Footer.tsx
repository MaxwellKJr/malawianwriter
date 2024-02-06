import SocialLinks from "./SocialLinks";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="flex flex-col flex-shrink-0 justify-center items-center border-t-[1px] dark:border-gray-300 dark:border-opacity-20 h-[10vh] w-screen">
      <div className="flex justify-center lg:justify-between items-center w-full sm:w-10/12 max-w-4xl text-center lg:text-left p-4 lg:p-0 mx-auto">
        <p className="text-xs text-gray-800 opacity-75">
          &copy; {date.getFullYear()} - Malawian Writer. <br />
          Developed by{" "}
          <a
            href="https://bymjcodes.com/"
            className="text-brand font-bold mt-4 opacity-100 dark:hover:text-brand"
            target="_blank"
            rel="noreferrer"
          >
            MJ Codes
          </a>
        </p>
        <div className="hidden lg:block">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
