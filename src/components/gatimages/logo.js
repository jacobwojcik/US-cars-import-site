import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
    const data = useStaticQuery(graphql`
    query gettImage {
        image:file(relativePath: {eq: "uscars.jpg"}) {
          id
          childImageSharp {
            fixed(width:40) {
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
  
  export default Logo