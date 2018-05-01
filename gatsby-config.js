module.exports = {
  siteMetadata: {
    title: 'Gatsby Drupal Starter',
  },
  pathPrefix: `/gatsby-drupal-starter`,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://live-contentacms.pantheonsite.io/`,
        apiBase: `api`,
      },
    },
  ],
}
