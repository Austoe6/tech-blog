import React from 'react'
import Whitespace from '../layout-components/whitespace'
import Categories from '../components/Categories'
import Title from '../components/Title'
import Layout from '../layout-components/layouts'
import { graphql } from "gatsby"

const CategoriesPage = ({data, transition, location}) =>{
    return(
        <Layout location={location}>
          <div className="container" style={transition && transition.style}>
            <Whitespace height={160}/>
            <Title title='All categories'/>
            <Whitespace height={20}/>
            <div>
              <Categories data={data.categories.group}/>
            </div>
            <Whitespace/>
          </div>
        </Layout>
    )
}

export default CategoriesPage

export const query = graphql`
  query Categories {
    categories: allMarkdownRemark(
      limit: 1000
      filter: {frontmatter: {templateKey: {eq: "blog"}}}
      sort: { fields: [frontmatter___date], order: DESC }
    ){
      group(field: frontmatter___category limit: 3){
        fieldValue
        totalCount
        edges{
          node{
            id
            fields {
              slug
            }
            frontmatter{
              title
              author
              thumbnail
              date
            }
          }
        }
      }
    }
  }
`