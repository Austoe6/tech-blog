import React from 'react'
import { graphql } from "gatsby"

import Whitespace from '../layout-components/whitespace';
import Title from '../components/Title';
import TopPosts from '../components/TopPosts';
import Helmet from 'react-helmet'
import { Row } from '../layout-components/grid';
import Layout from '../layout-components/layouts';
import AllPosts from '../components/AllPosts';

class CategoryPage extends React.Component{
    render(){
        const {data, transition, location} = this.props
        const posts = data.allMarkdownRemark.edges
        const recentPosts = posts.length > 2 ? posts.slice(0, 2) : posts
        const category = this.props.pageContext.category
        const title = this.props.data.site.siteMetadata.title
        return(
            <Layout location={location}>
                <div style={transition && transition.style}>
                    <Helmet title={`${category} | ${title}`} />
                    <Whitespace/>
                    <div style={{backgroundImage: `url(${posts[0].node.frontmatter.thumbnail})`, marginBottom: 20, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                        <div className="category-page__header">
                            <div className="container">
                                <h1>{category}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <Title title='recent posts'/>
                        <TopPosts data={recentPosts}/>
                        {
                            posts.length > 2 ?
                            <div>
                                <Whitespace height={60}/>
                                <Title title={`All ${category}`}/>
                                <Row>
                                    <AllPosts data={posts.slice(2)}/>
                                </Row>
                            </div>
                            :
                            <Whitespace/>
                        }
                    </div>
                </div>
            </Layout>
        )
    }
}

export default CategoryPage

export const query = graphql`
  query CategoryPage($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            category
            thumbnail
            author
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`
