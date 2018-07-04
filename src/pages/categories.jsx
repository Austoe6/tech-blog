import React from 'react'
import Whitespace from '../layout-components/whitespace'
import Categories from '../components/Categories'
import Title from '../components/Title';

const CategoriesPage = ({data, transition}) =>{
    return(
        <div className="container" style={transition && transition.style}>
          <Whitespace height={160}/>
          <Title title='All categories'/>
          <Whitespace height={20}/>
          <div>
            <Categories data={data.categories.group}/>
          </div>
          <Whitespace/>
        </div>
    )
}

export default CategoriesPage

export const query = graphql`
  query Categories {
    categories: allMarkdownRemark(
      limit: 12
      filter: {frontmatter: {templateKey: {eq: "blog"}}}
    ){
      group(field: frontmatter___category){
        fieldValue
        totalCount
        edges{
          node{
            id
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