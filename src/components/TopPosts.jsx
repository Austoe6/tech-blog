import React from 'react'
import {Row, Col} from '../layout-components/grid'
import Link from 'gatsby-link'
import AdUnit from './adUnit';

const TopPosts = ({data}) =>{
    return (
        <Row style={{paddingBottom: '4rem'}}>
            {
                data.map((post) =>
                <Col lg={12} xs={24} key={post.node.id}>
                    <div className="top-post__container">
                        <div className="top-post__category">
                            <span>{post.node.frontmatter.category}</span>
                        </div>
                        <Link to={post.node.fields.slug}>
                            <h1 className="top-post__title">{post.node.frontmatter.title}</h1>
                        </Link>
                        <span className="top-post__meta">By <Link to={`/authors`}>{post.node.frontmatter.author}</Link> on {post.node.frontmatter.date}</span>
                        <p className="top-post__excerpt">{post.node.excerpt}</p>
                    </div>
                </Col>
            )
            }
            <Col lg={12} xs={24} id='ad'>
                <div style={{paddingTop: 20}}>
                    <a href="http://c.jumia.io/?a=95078&c=193&p=r&E=kkYNyk2M4sk%3d&utm_source=cake&utm_medium=affiliation&utm_campaign=95078&utm_term=">
                        <img src="http://jumia.co/nl-templates-kenya/Affiliates/Newsletter/GDN/KE/Infinix%20Pay%20Day%20Deal/320X100.jpg"/>
                    </a>
                </div>
            </Col>
        </Row>
    )
}

export default TopPosts;