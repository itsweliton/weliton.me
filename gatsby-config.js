module.exports = {
  siteMetadata: {
    title: `Weliton.me`,
    author: `Weliton de Resende`,
    description: `empty`,
    siteUrl: `https://weliton.me`,
    social: {
      twitter: `welitondresende`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow"
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-117762567-2",
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Weliton's Blog`,
        short_name: `Weliton de Resende`,
        start_url: `/`,
        background_color: `#04003B`,
        theme_color: `#04003B`,
        display: `minimal-ui`,
        icon: `content/assets/wr_favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true,          // use prettier to format JS code output (default)
        svgo: true,              // use svgo to optimize SVGs (default)
        svgoConfig: {
          plugins: {
            removeViewBox: true, // remove viewBox when possible (default)
            cleanupIDs: true,    // remove unused IDs and minify remaining IDs (default)
          },
        },
      },
    },
  ],
}
