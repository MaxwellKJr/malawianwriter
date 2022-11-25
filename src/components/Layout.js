import React from 'react';
import Header from "./Header";

const Layout = ({children}) => (
    <>
      <Header/>
      <main>
        {children}
      </main>
    </>
);

export default Layout;

export const Head = () => <title>Blog | Malawian Writer</title>;