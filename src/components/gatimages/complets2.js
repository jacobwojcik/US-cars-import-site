import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Com2 = () => {
    const data = useStaticQuery(graphql`
    query getImage23 {
        image:file(relativePath: {eq: "bmwi8.jpg"}) {
          id
          childImageSharp {
            fixed(width:500) {
              ...GatsbyImageSharpFixed
            }
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  
    return <Img fluid={data.image.childImageSharp.fluid} />
  }
  
  export default Com2