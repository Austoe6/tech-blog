import React from 'react'
import Whitespace from '../layout-components/whitespace'
import Layout from '../layout-components/layouts'

const MediaPage = ({transition, location}) =>{
    return(
        <Layout location={location}>
            <div style={transition && transition.style} className="container min-height--vh">
                <Whitespace height={160}/>
                <h1>Youtube channel comming soon</h1>
            </div>
        </Layout>
    )
}

export default MediaPage