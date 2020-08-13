import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image3mob = () => {
  const data = useStaticQuery(graphql`
    query getpImage {
      image: file(relativePath: { eq: "car3mob.jpg" }) {
        id
        childImageSharp {
          fixed(width: 500) {
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

export default Image3mob
