const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'TechGenius',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [autoprefixer()],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    'gatsby-plugin-netlify-cms',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-120919873-3",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
  ],
}
