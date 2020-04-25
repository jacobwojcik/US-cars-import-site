import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image1 = () => {
    const data = useStaticQuery(graphql`
    query getImage {
        image:file(relativePath: {eq: "car1n.jpg"}) {
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
  
  export default Image1