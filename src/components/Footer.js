import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#061715] p-4 flex-shrink-0">
      <div className="uppercase font-light w-full h-full px-4 mx-auto md:px-0 md:w-3/4 text-primary text-center sm:text-left max-w-screen-lg">
        <small>Copyright &copy; 2022 - Maxwell Kapezi Jr.</small>
        <br />
        <small>
          Developed by{" "}
          <a
            className="font-bold hover:text-white hover:underline transition"
            href="http://mjcodes.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MJ Codes
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
