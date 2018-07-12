import React from 'react'
import {Row, Col} from '../layout-components/grid'
import Link from 'gatsby-link'
import { kebabCase } from 'lodash'

const AllPosts = ({data}) =>{
    return (
        <div className="all-posts__container border-right">
            <Row>
                {
                    data.map((post) =>
                    <Col lg={12} xs={24} key={post.node.id}>
                        <div className="post-item__container">
                            <div className="post-item__image" style={{backgroundImage: `url(${post.node.frontmatter.thumbnail})`}}>
                            </div>
                            <Link to={post.node.fields.slug}>
                                <h2 className="post-item__title">{post.node.frontmatter.title}</h2>
                            </Link>
                            <div className="post-item__meta">
                                <span>{post.node.frontmatter.date} in <Link to={`/categories/${kebabCase(post.node.frontmatter.category)}`}>#{post.node.frontmatter.category}</Link></span>
                            </div>
                            <p className="post-item__excerpt">{post.node.excerpt}</p>
                        </div>
                    </Col>
                )
                }
            </Row>
            <Link to='/categories'>
                <div className="load-more">
                    More Posts
                </div>
            </Link>
        </div>
    )
}

export default AllPosts;