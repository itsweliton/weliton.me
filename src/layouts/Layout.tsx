import React, { ReactNode } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";
import Sidebar from "../components/Sidebar";
import "../styles/layout.scss";
import "../styles/utils.scss";
import Header from "../components/Header";

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
      <main className="content">
        <Header
          mobOpen={mobOpen}
          setMobOpen={setMobOpen}
          pageTitle={!location.pathname.endsWith(`posts/`) ? pageTitle : ""}
        />
        {children}
      </main>
    </div>
  );
};

export default Layout;
