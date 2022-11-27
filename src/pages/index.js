import * as React from 'react'
import Layout from "../components/Layout";
import {motion} from "framer-motion";
import Showcase from "../components/Showcase";

const IndexPage = () => {
  return (
      <Layout>
        <Showcase/>
      </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home | Malawian Writer</title>;
