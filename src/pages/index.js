import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site that is getting data from Drupal.</p>
    <p>
      The list of recipe titles below is coming from a Contenta CMS site on
      Patheon.
    </p>
    {data.allRecipes.edges.map(recipe => <div>{recipe.node.title}</div>)}
    <Link to="/page-2/">Go to see another page</Link>
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    allRecipes {
      edges {
        node {
          title
        }
      }
    }
  }
`
