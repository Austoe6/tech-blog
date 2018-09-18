import React from 'react'
import Whitespace from '../layout-components/whitespace'
import Layout from '../layout-components/layouts'

const NotFoundPage = ({props}) => (
  <Layout location={props.location}>
    <div style={{minHeight:'80vh'}}>
      <Whitespace height={200}/>
      <div style={{textAlign: 'center'}}>
        <h1 style={{fontSize: 100, color: '#f6f6f6', fontWeight: '700'}}>NOT FOUND</h1>
        <Whitespace/>
        <p>You just hit a route that doesn&#39;t exist</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
