import React from 'react'
import FeaturedPosts from '../components/FeaturedPosts';
import About from '../components/About';
import TopPosts from '../components/TopPosts';
import AllPosts from '../components/AllPosts';
import Title from '../components/Title';
import Whitespace from '../layout-components/whitespace'
import {Helmet} from 'react-helmet'
import Layout from '../layout-components/layouts'
import { graphql } from "gatsby"

const IndexPage = ({data, transition, location}) =>{
  const allPosts = data.blogposts.edges
  const featuredPosts = data.featuredPosts.edges
  const aboutData = data.about

  //remove displayed posts
  let displayedPosts = featuredPosts.map((post) => post.node.id)
  let topPosts = []
  allPosts.forEach((post) =>{
    if(displayedPosts.indexOf(post.node.id) === -1){
      topPosts = topPosts.concat(post)
    }
  })

  return(
    <Layout location={location}>
      <div style={transition && transition.style}>
        <Helmet>
          <meta name="google-site-verification" content="D4nmmh7GN4IXDcMhOT9XICJ9QuF7uCugTrurqSgXaqQ" />
        </Helmet>
        <Whitespace/>
        <div>
          <FeaturedPosts posts={featuredPosts}/>
        </div>
        <div style={{backgroundColor: '#fafafa',paddingTop: '2rem'}}>
          <div className="container">
            <Title title='Top Posts'/>
            <TopPosts data={topPosts.slice(0, 3)} />
          </div>
        </div>
        <About data={aboutData} />
        <div className="container">
          <Whitespace height ={16}/>
          <Title title='All Posts'/>
          <AllPosts data={allPosts}/>
        </div>
        <Whitespace/>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    blogposts: allMarkdownRemark(
      filter: {frontmatter: {templateKey: {eq: "blog"}}}
      limit: 12
      sort: { fields: [frontmatter___date], order: DESC }
    ){
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            thumbnail
            category
            author
            featured
            tagline
            description
          }
        }
      } 
    }
    featuredPosts: allMarkdownRemark(
      filter: {frontmatter: {featured: {eq: true}}}
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
    ){
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
            thumbnail
            category
          }
        }
      } 
    }
    about: allMarkdownRemark(
      filter: {frontmatter: {title: {eq: "About"}}}
    ){
      edges {
        node {
          frontmatter {
            title
            tagline
            image
            email
            phone
          }
          html
        }
      }
    }
  }

`
