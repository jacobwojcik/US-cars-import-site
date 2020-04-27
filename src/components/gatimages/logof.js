import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logof = () => {
    const data = useStaticQuery(graphql`
    query gettiImage {
        image:file(relativePath: {eq: "uscars.jpg"}) {
          id
          childImageSharp {
            fixed(width:80) {
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
  
  export default Logof