import * as React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";

const PostsListing = () => {
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
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/posts/${post.frontmatter.slug}`}>
            <h2>{post.frontmatter.title}</h2>
            <p>Posted: {post.frontmatter.date}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostsListing;
