import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Layout pageTitle="Its Weliton">
        <h1>Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatem, quas, cumque, quos voluptatum voluptates dolorum
          voluptatibus quae natus doloremque consequuntur. Quisquam, quae
          voluptates. Quisquam, quae voluptates.
        </p>
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
