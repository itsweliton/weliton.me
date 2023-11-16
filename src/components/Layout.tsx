import React, { ReactNode } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Sidebar from "./Sidebar";

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
    <div>
      <header>{data.site.siteMetadata.title}</header>
      <Sidebar />
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
