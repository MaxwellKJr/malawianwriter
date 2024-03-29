"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faBarsStaggered, faClose } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";
import SocialLinks from "./SocialLinks";
import Footer from "./Footer";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { href: "/", label: "Home", title: "Home" },
  { href: "/on-writing", label: "On Writing", title: "Read Something" },
  { href: "/stories", label: "Stories", title: "Could be fiction" },
  { href: "/poems", label: "Poems", title: "The Shakespeare in me" },
  // { href: '/in-progress', label: 'In Progress', title: 'Work-in-progress' },
];

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const Header: React.FC = () => {
  const pathname = usePathname();

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <FontAwesomeIcon
          icon={faSun}
          className="w-4 h-4 bg-gray-300 text-black rounded-lg p-2 select-none hover:cursor-pointer hover:scale-[.80]"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <FontAwesomeIcon
          icon={faMoon}
          className="w-4 h-4 bg-gray-900 text-white rounded-lg p-2 select-none hover:cursor-pointer hover:scale-[.80]"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <nav className="bg-white/30 dark:bg-gray-900/30 dark:text-gray-300 backdrop-blur-md p-4 fixed top-0 w-full border-b-[1px] dark:border-gray-300 dark:border-opacity-20 h-[10vh] z-50">
      <div className="flex flex-row w-full h-full sm:w-10/12 max-w-4xl m-auto justify-between items-center">
        <Link
          href={`/`}
          className="inline-block text-3xl font-Dancing-Script text-black dark:text-white dark:hover:text-brand hover:text-brand"
          title="The Warm Heart 🇲🇼 Writer"
          onClick={() => setToggleNav(false)}
        >
          Malawian Writer <span className="text-brand hover:text-black">.</span>
        </Link>

        <div className="flex">
          <ul className="hidden lg:flex sm:justify-end justify-center items-center w-full border-t-[1px] sm:border-0 pt-4 sm:pt-0">
            {links.map((link) => {
              const isActive =
                pathname.startsWith(link.href) && pathname.endsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={
                      isActive
                        ? "uppercase font-semibold text-xs xl:text-xs 2xl:text-sm text-brand dark:text-brand p-4 transition-all ease-in-out duration-300"
                        : "uppercase text-xs xl:text-xs 2xl:text-sm text-black p-4 hover:text-brand transition-all ease-in-out duration-300"
                    }
                    title={link.title}
                    onClick={() => setToggleNav(!toggleNav)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul
            className={
              toggleNav
                ? `absolute flex flex-col lg:hidden top-[10vh] left-0 min-h-[90vh] w-full mx-auto p-4 bg-white dark:bg-gray-900 z-50 transition-all ease-in-out duration-500 transform translate-x-[0]`
                : `absolute flex flex-col lg:hidden top-[10vh] left-0 min-h-[90vh] w-full mx-auto p-4 bg-white dark:bg-gray-900 z-50 transition-all ease-in-out duration-700 transform translate-x-[200%]`
            }
          >
            <div className="flex-1">
              {links.map((link) => {
                const isActive =
                  pathname.startsWith(link.href) &&
                  pathname.endsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={
                        isActive
                          ? "inline-block py-8 w-full border-b-[1px] dark:border-gray-300 dark:border-opacity-20 uppercase text-sm text-brand dark:text-brand hover:text-brand"
                          : "inline-block py-8 w-full border-b-[1px] dark:border-gray-300 dark:border-opacity-20 uppercase text-sm hover:text-brand"
                      }
                      title={link.title}
                      onClick={() => setToggleNav(!toggleNav)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}

              <h5 className="text-lg font-bold mt-8 text-zinc-900 dark:text-white">
                Contact Me
              </h5>
              <SocialLinks />
            </div>
            <Footer />
          </ul>

          <div className="flex items-center h-full">
            <div
              className="lg:hidden mr-2 mt-1 sm:mt-2 p-2 hover:cursor-pointer hover:opacity-75 select-none"
              onClick={() => setToggleNav(!toggleNav)}
            >
              <FontAwesomeIcon
                icon={toggleNav ? faClose : faBarsStaggered}
                className={
                  toggleNav
                    ? `w-4 h-4 sm:w-5 sm:h-5 transition-all ease-in-out duration-300 text-brand`
                    : `w-4 h-4 sm:w-5 sm:h-5 transition-all ease-in-out duration-300`
                }
              />
            </div>
            {renderThemeChanger()}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
