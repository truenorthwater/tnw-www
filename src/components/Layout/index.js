import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header';
import Footer from "./Footer";
import '../../scss/style.scss';

const Layout = ({ children, title = "", description = "" }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: description }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          {children}
        </div>
        <Footer />
      </>
    )}
  />
)

export default Layout
