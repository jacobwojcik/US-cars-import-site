import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Com1 = () => {
    const data = useStaticQuery(graphql`
    query getImage22 {
        image:file(relativePath: {eq: "supra.jpg"}) {
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
  
  export default Com1