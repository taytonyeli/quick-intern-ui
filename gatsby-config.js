module.exports = {
  siteMetadata: {
    title: `Assisted Intern`,
    description: `Assisted Intern: Find internships, jobs in Ghana`,
    author: `@taytonyeli`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6
        }
      }
    },
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        ignore: ['react-datepicker.css'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
        purgeCSSOptions: {
          // https://purgecss.com/configuration.html#options
          // safelist: ['safelist'], // Don't remove this selector
        }
        // More options defined here https://purgecss.com/configuration.html#options
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `quick-intern`,
        short_name: `quick-intern`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // `gatsby-plugin-gatsby-cloud`,
  ]
}
