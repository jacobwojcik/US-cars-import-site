import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Back = () => {
    const data = useStaticQuery(graphql`
    query getkImage {
        image:file(relativePath: {eq: "back.png"}) {
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
  
  export default Back