import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Offer3 = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "mustang.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 99) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.image.childImageSharp.fluid} />
}

export default Offer3
