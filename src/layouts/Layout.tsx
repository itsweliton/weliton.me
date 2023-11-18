import React, { ReactNode } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Sidebar from "../components/Sidebar";
import "../styles/layout.scss";
import PostsListing from "../components/PostsListing";

type LayoutProps = {
  children: ReactNode;
  pageTitle?: string;
};

const Layout = ({ children, pageTitle }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className="layout">
      <aside className="layout-sidebar">
        <Sidebar />
        <div className="background-image"></div>
      </aside>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
