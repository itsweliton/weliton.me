import * as React from "react";
import Seo from "../../components/Seo";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../layouts/Layout";
import "../../styles/post-content.scss";
import PostsListing from "../../components/PostsListing";

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="post-details-wrapper">
        <PostsListing />
        <div className="post-content">
          <p>{data.mdx.frontmatter.date}</p>
          <div>
            {image && (
              <GatsbyImage
                image={image}
                alt={data.mdx.frontmatter.hero_image_alt}
              />
            )}
          </div>
          {children}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Super Cool Blog Posts" />;

export default BlogPost;
