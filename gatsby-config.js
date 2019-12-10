module.exports = {
  siteMetadata: {
    title: `membersy`,
    author: `Gabe Amaya`,
    description: `membersy 2.0 built by the newest, freshest dev on the team`,
    siteUrl: `https://www.membersy.com`,
    social: {
      twitter: `membersy`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: 'assets'
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
              sizeByPixelDensity: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `add code here`,
    //     head: true,
    //     exclude: ["/preview/**", "/do-not-track/me/too/"],
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `membersy`,
        short_name: `membersy`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/tooth.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}