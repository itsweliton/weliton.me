import * as React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import { useLocation } from "@reach/router";
import "../styles/posts-listing.scss";

const PostsListing = () => {
  const location = useLocation();

  const data = useStaticQuery(graphql`
    query PostsListingQuery {
      allMdx(sort: {frontmatter: {date: DESC}}) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            slug
          }
          id
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;

  return (
    <div className="posts-listing">
      <div className="listing-header">
        <h3>Posts</h3>
      </div>
      <ul className="list">
        {posts.map((post) => (
          <li
            key={post.id}
            className={
              location.pathname === `/posts/${post.frontmatter.slug}/`
                ? "post-item active"
                : "post-item"
            }
          >
            <Link to={`/posts/${post.frontmatter.slug}`}>
              <p className="post-title">{post.frontmatter.title}</p>
              <p className="post-date">{post.frontmatter.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsListing;
