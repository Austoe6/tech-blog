import React from 'react'
import { Row, Col } from '../layout-components/grid';
import {Link} from 'gatsby'
import {kebabCase} from 'lodash'

class Categories extends React.Component{
    render(){
        const {data} = this.props
        return(
            <section className="category__container">
                {
                    data.map((category)=>
                    <div key={category.fieldValue}>
                        <Row className='category-item__container'>
                            <Col lg={12} md={24} className='category-item__image' style={{backgroundImage: `url(${category.edges[0].node.frontmatter.thumbnail})`, marginBottom: 20, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                               <Link to={`categories/${kebabCase(category.fieldValue)}`}>
                                    <span className='category-item__title'># {category.fieldValue}</span>
                               </Link>
                            </Col>
                            <Col lg={12} md={24}>
                                <div className="category-item__latest-container">
                                    <span>Latest in {category.fieldValue}</span>
                                    <div className="category-item__latest-item">
                                        {
                                            category.edges.map(post => 
                                                <div>
                                                    <Link to={post.node.fields.slug}>
                                                        <h2>{post.node.frontmatter.title}</h2>
                                                    </Link>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <Link to={`categories/${kebabCase(category.fieldValue)}`}>+ More</Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                )
                }
            </section>
        )
    }
}

export default Categories