import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Pic1 = () => {
    const data = useStaticQuery(graphql`
    query g {
        image:file(relativePath: {eq: "ford.jpg"}) {
          id
          childImageSharp {
            fixed(width:700) {
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
  
  export default Pic1