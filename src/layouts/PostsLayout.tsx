import React, { ReactNode } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Sidebar from "../components/Sidebar";
import "../styles/layout.scss";
import PostsListing from "../components/PostsListing";

type PostsLayoutProps = {
  children: ReactNode;
  pageTitle: string;
};

const PostsLayout = ({ children, pageTitle }: PostsLayoutProps) => {
  return (
    <div className="layout">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <aside>
        <PostsListing />
      </aside>
      <main className="main-content">
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default PostsLayout;
