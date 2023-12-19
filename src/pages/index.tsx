import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../layouts/Layout";
import Seo from "../components/Seo";
import "../styles/index.scss";
import Author from "../components/Author";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main className="main-content">
        <Author
          image="https://source.unsplash.com/random/200x200"
          name="Weliton Soranzo"
          role="Frontend Engineer"
        />
        <p className="intro">
          I'm a Frontend Engineer with 8 years of experience living as a nomad
          abroad. I've contributed to many large projects across the companies
          I've worked, and right now I work at OSF Healthcare, also I build my
          own projects. Currently I'm building{" "}
          <a className="link" href="https://www.espressodesk.io">
            Espresso Desk
          </a>
          .
        </p>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home" />;
