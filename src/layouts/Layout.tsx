import React, { ReactNode } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Sidebar from "../components/Sidebar";
import "../styles/layout.scss";

type LayoutProps = {
  children: ReactNode;
  pageTitle: string;
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
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="main-content">
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
