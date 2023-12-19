import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../layouts/Layout";
import Seo from "../components/Seo";
import "../styles/index.scss";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main className="main-content">
        <h1>Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatem, quas, cumque, quos voluptatum voluptates dolorum
          voluptatibus quae natus doloremque consequuntur. Quisquam, quae
          voluptates. Quisquam, quae voluptates.
        </p>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home" />;
