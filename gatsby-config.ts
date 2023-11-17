import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `It's Weliton`,
    siteUrl: `https://weliton.me`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/posts/`,
      },
      __key: "posts",
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            // You can also load fonts from Google Fonts if needed
          ],
          custom: [
            {
              family: "Inter Regular",
              urls: ["/fonts/Inter-Regular.ttf"],
            },
            {
              family: "Inter Medium",
              urls: ["/fonts/Inter-Medium.ttf"],
            },
            {
              family: "Inter Extra Light",
              urls: ["/fonts/Inter-ExtraLight.ttf"],
            },
            {
              family: "Inter Thin",
              urls: ["/fonts/Inter-Thin.ttf"],
            },
            {
              family: "Newsreader Extra Light",
              urls: ["/fonts/Newsreader_60pt-ExtraLight.ttf"],
            },
            {
              family: "Newsreader Extra Light Italic",
              urls: ["/fonts/Newsreader_60pt-ExtraLightItalic.ttf"],
            },
            {
              family: "Newsreader Light",
              urls: ["/fonts/Newsreader_60pt-Light.ttf"],
            },
            {
              family: "Newsreader Light Italic",
              urls: ["/fonts/Newsreader_60pt-LightItalic.ttf"],
            },
            {
              family: "Newsreader Italic",
              urls: ["/fonts/Newsreader_60pt-Italic.ttf"],
            },
            {
              family: "Newsreader Regular",
              urls: ["/fonts/Newsreader_60pt-Regular.ttf"],
            },
            {
              family: "Newsreader Medium",
              urls: ["/fonts/Newsreader_60pt-Medium.ttf"],
            },
            {
              family: "Newsreader Medium Italic",
              urls: ["/fonts/Newsreader_60pt-MediumItalic.ttf"],
            },
            {
              family: "Newsreader Semi Bold",
              urls: ["/fonts/Newsreader_60pt-SemiBold.ttf"],
            },
            {
              family: "Newsreader Semi Bold Italic",
              urls: ["/fonts/Newsreader_60pt-SemiBoldItalic.ttf"],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/Layout.tsx`),
      },
    },
  ],
};

export default config;
