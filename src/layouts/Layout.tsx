import React, { ReactNode } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";
import Sidebar from "../components/Sidebar";
import "../styles/layout.scss";
import "../styles/utils.scss";
import MenuIcon from "../images/icons/menu-icon.inline.svg";
import PostsListing from "../components/PostsListing";

type LayoutProps = {
  children: ReactNode;
  pageTitle?: string;
};

const Layout = ({ children, pageTitle }: LayoutProps) => {
  const location = useLocation();
  const [mobOpen, setMobOpen] = React.useState<boolean>(false);
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
      <aside className={`layout-sidebar ${mobOpen ? "" : "sidebar-hidden"}`}>
        <Sidebar isOpen={mobOpen} close={setMobOpen} />
      </aside>
      {location.pathname.startsWith("/posts") && (
        <aside>
          <PostsListing />
        </aside>
      )}
      <main className="main-content">
        <div className="sticky-header" onClick={() => setMobOpen(!mobOpen)}>
          <MenuIcon />
          {pageTitle ? (
            <h2>{pageTitle}</h2>
          ) : (
            <h2>{data.site.siteMetadata.title}</h2>
          )}
        </div>
        <div className="content">{children}</div>
        {children}
      </main>
    </div>
  );
};

export default Layout;
