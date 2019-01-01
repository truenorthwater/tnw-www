const autoprefixer = require('autoprefixer');
const browserslist = require('browserslist');

module.exports = {
  siteMetadata: {
    title: 'True North Water',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'true-north-water',
        short_name: 'starter',
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#FFF',
        display: 'minimal-ui',
        icon: 'src/favicon.png', // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-131541335-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/favicon.png',

        // WebApp Manifest Configuration
        appName: 'True North Water', // Inferred with your package.json
        appDescription: 'Canada\'s Clean Water Charity',
        developerName: 'True North Water',
        developerURL: 'https://truenorthwater.org',
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: true,
          twitter: true,
          yandex: false,
          windows: true
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          autoprefixer({ browsers: browserslist() }),
        ],
      },
    },
    'gatsby-plugin-offline'
  ],
}
