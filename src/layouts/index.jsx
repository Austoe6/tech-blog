import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import SocialIcons from '../components/social-icons'

import Header from '../components/header'
import '../styles/styles.scss'
import Whitespace from '../layout-components/whitespace';
import Divider from '../layout-components/divider';

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={`${data.site.siteMetadata.title} | TechGenius we geek about technology, software problems fixes, reviews and analysis. `}
      meta={[
        { name: 'description', content: 'TechGenius we geek about technology, software problems fixes, softwares, smartphones specs and analysis. Learn more about tech with us.' },
        { name: 'keywords', content: 'Technology, smartphones reviews, software analysis and reviews, tech talks and updates.' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} location={location} />
    <div>
      {children()}
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
        <p>Made by <a href='https://www.awedevs.me' target='_blank' rel='noopener'>Awedevs</a></p>
      </div>
      <Whitespace height={20}/>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
