import * as React from "react";
import Layout from "../../layouts/Layout";
import Seo from "../../components/Seo";
import PostsListing from "../../components/PostsListing";

const Posts = () => {
  return (
    <Layout pageTitle="Posts">
      <div></div>
    </Layout>
  );
};
export const Head = () => <Seo title="My Blog Posts" />;

export default Posts;
