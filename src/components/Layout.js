import React from 'react';
import {AnimatePresence} from "framer-motion";
import Header from "./Header";

const Layout = ({children}) => (
    <>
      <Header/>
      <main className="bg-doodles">
        <AnimatePresence>
          {children}
        </AnimatePresence>
      </main>
    </>
);

export default Layout;

export const Head = () => <title>Blog | Malawian Writer</title>;