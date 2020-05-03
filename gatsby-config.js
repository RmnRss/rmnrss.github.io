module.exports = {
  siteMetadata: {
    title: `Romain Rousseau`,
    description: `A little bit about me and my work.`,
    author: `Romain Rousseau`,
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
        name: `gatsby-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/site-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true,         // use prettier to format JS code output (default)
        svgo: true,             // use svgo to optimize SVGs (default)
        svgoConfig: {
          removeViewBox: false, // remove viewBox when possible (default)
          cleanupIDs: true,    // remove unused IDs and minify remaining IDs (default)
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Poppins:100,200,300,400,500,600,700,800,900', 'Inter:400,500,600,700,800,900', 'Montserrat:700,900', 'sans-serif', 'Material Icons'],
        },
        custom: {
          families: ['Font Awesome 5 Icons:400,900', 'Font Awesome 5 Brands:400'],
          urls: ['//use.fontawesome.com/releases/v5.12.0/css/all.css'],
        },
      }
    },
    `gatsby-plugin-styled-components`,
  ]
};
