module.exports = {
  siteMetadata: {
    title: `NetworX`,
    description: `Health is wealth`,
    author: `@luchmewep`,
    siteUrl: `https://infallible-cray-1ffd47.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NetworX`,
        short_name: `NetX`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: ["/404/*"],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "XXXXXXXX",
        head: false,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto`],
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain the remote schema Query type
        typeName: "NETX",
        // This is the field under which it's accessible
        fieldName: "netx",
        // URL to query from
        url: "https://phplaravel-457694-1433264.cloudwaysapps.com/graphql",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
