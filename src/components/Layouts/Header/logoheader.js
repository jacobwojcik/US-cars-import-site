import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query getLogo {
      image: file(relativePath: { eq: "logov1.png" }) {
        id
        childImageSharp {
          fixed(width: 80) {
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
