module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Ashvin Motye`,
    description: `Hi, I'am Ashvin Motye and I'm a Frontend Developer with 3+ years experience in developing websites. I am currently focusing on JS frameworks.`,
    author: `Ashvin Motye`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ashvin Motye`,
        short_name: `Ashvin Motye`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`noto sans`],
        display: "swap",
      },
    },
    `gatsby-plugin-preload-fonts`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
