import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import '../styles/styles.scss'
import Whitespace from '../layout-components/whitespace';
import Divider from '../layout-components/divider';

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={`${data.site.siteMetadata.title} | TechGenius we geek about technology, software problems fixes, cars, smartphones specs and prices in Kenya. Get smarter with TechGenius Kenya! No. 1 Kenyas Tech blog`}
      meta={[
        { name: 'description', content: 'TechGenius we geek about technology, software problems fixes, cars, smartphones specs and prices in Kenya. Get smarter with TechGenius Kenya! No. 1 Kenyas Tech blog' },
        { name: 'keywords', content: 'Technology, smartphones in kenya, cars kenya, tech reviews Kenya' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} location={location} />
    <div>
      {children()}
    </div>
    <div className="container">
      <Whitespace height={60}/>
      <Divider />
      <div className='footer__container'>
        <p>&copy; Copyright 2018</p>
        <p>Made by <a href='https://awedevs.me' target='_blank'>Awedevs</a></p>
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
