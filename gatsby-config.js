module.exports = {
  siteMetadata: {
    title: `Us Cars Import`,
    description: `Najlepszy import samochodów z Usa i Kanady`,
    author: `JW`,
  },
  plugins: [
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/uscars.jpg`, // This path is relative to the root of the site.
      },
    },
    
    `gatsby-plugin-sass`,
   
  ],
}
