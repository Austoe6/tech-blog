import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import SocialIcons from '../../components/social-icons'
import Header from '../../components/header'
import '../../styles/styles.scss'
import Whitespace from '../whitespace'
import Divider from '../divider'
import { StaticQuery, graphql } from "gatsby"

const Layout = ({ children, location }) => (
  <StaticQuery
    query = {
      graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `
    }

    render = {
      data => (
        <main>
          <Helmet
            title={`${data.site.siteMetadata.title} | TechGenius we geek about technology, software problems fixes, reviews and analysis. `}
            meta={[
              { name: 'description', content: 'TechGenius we geek about technology, software problems fixes, softwares, smartphones specs and analysis. Learn more about tech with us.' },
              { name: 'keywords', content: 'Technology, smartphones reviews, software analysis and reviews, tech talks and updates.' },
            ]}
          >
          <html lang="en" />
          </Helmet>
          <Header siteTitle={data.site.siteMetadata.title} location={location} />
          <div>
            {children}
          </div>
          <div className="container">
            <Whitespace height={60}/>
            <Divider />
            <div className="footer__container">
              <div>
                <SocialIcons/>
              </div>
              <div>
                <a href="/privacy-policy">Our privacy policy</a>
              </div>
            </div>
            <Whitespace height={20}/>
            <div className='footer__container'>
              <p>&copy; Copyright 2018</p>
              <p>Made by <a href='https://www.go-studio.co' target='_blank' rel="noopener noreferrer">GO Studio</a></p>
            </div>
            <Whitespace height={20}/>
          </div>
        </main>
      )
    }
  />
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout