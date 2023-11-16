// // src/templates/Post.tsx
// import React from "react";
// import { graphql } from "gatsby";

// const PostTemplate = ({ data }) => {
//   const post = data.allFile.nodes[0].childMarkdown;

//   return (
//     <div>
//       <h1>{post.frontmatter.title}</h1>
//       <p>{post.frontmatter.date}</p>
//       <div dangerouslySetInnerHTML={{ __html: post.html }} />
//     </div>
//   );
// };

// export const query = graphql`
//   query($slug: String!) {
//     allFile(filter: { fields: { slug: { eq: $slug } } }) {
//       nodes {
//         childMarkdown {
//           frontmatter {
//             title
//             date(formatString: "MMMM DD, YYYY")
//           }
//           html
//         }
//       }
//     }
//   }
// `;

// export default PostTemplate;
