import React from "react";
import {Link} from "gatsby"
import logo from "../images/maxwellkapezi-logo.png";
import SocialLinks from "./SocialLinks";

const Header = () => {
  return (
      <header className="py-4 bg-black backdrop-blur-lg bg-opacity-50 text-white fixed left-0 top-0 w-full z-50">
        <div
            className="flex flex-col md:flex-row md:justify-between items-center w-full px-4 md:px-0 m-auto md:w-3/4 max-w-screen-lg">
          <nav className="flex flex-col md:flex-row justify-center items-center">
            <Link to="/" className="lg:inline-block pt-2 hidden" title="Malawian Writer">
              <img
                  src={logo}
                  alt="logo"
                  width={40}
                  height={34}
              />
            </Link>
            <ul className="flex flex-row items-center">
              <li>
                <Link to="/"
                      className="text-white font-normal uppercase text-xs p-4"
                      activeClassName="text-primary font-bold uppercase text-xs p-4"
                      title="Home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog"
                      className="text-white font-normal uppercase text-xs p-4"
                      activeClassName="text-primary font-bold uppercase text-xs p-4"
                      title="Blog"
                >
                  Blog
                </Link>
              </li>
              {/*<li>*/}
              {/*  <Link to="/books"*/}
              {/*        className="text-white font-normal uppercase text-xs p-4"*/}
              {/*        activeClassName="text-primary font-bold uppercase text-xs p-4"*/}
              {/*        title="What to read"*/}
              {/*  >*/}
              {/*    Books*/}
              {/*  </Link>*/}
              {/*</li>*/}
              <li>
                <Link to="/about"
                      className="text-white font-normal uppercase text-xs p-4"
                      activeClassName="text-primary font-bold uppercase text-xs p-4"
                      title="Know the author"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <SocialLinks/>
        </div>
      </header>
  );
};

export default Header;
