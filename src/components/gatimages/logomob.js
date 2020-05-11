import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo2 = () => {
    const data = useStaticQuery(graphql`
    query getttImage {
        image:file(relativePath: {eq: "logo3.png"}) {
          id
          childImageSharp {
            fixed(width:120) {
              ...GatsbyImageSharpFixed
            }
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  
    return <Img fixed={data.image.childImageSharp.fixed} />
  }
  
  export default Logo2