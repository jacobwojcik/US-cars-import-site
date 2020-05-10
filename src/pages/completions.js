import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"


import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Lightbox from '../components/lightbox'
import { Container } from "react-bootstrap"
import "../components/css/offercom.scss"
const Completions = ({ data }) => (
  <Layout>
    <SEO title="Realizacje" />
    <Container className="lbox">
      <h1>Nasze realizacje</h1>
    <Lightbox images={data.flabel.edges} />
    <Lightbox images={data.slabel.edges} />
    {/* <Lightbox images={data.allFile.edges} /> */}
    </Container>
   
    
    
  </Layout>
)

Completions.propTypes = {
  data: PropTypes.object.isRequired,
}


export default Completions

export const pageQuery = graphql`
  query IndexQuery {
    flabel:allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "completions"}}) {
      edges {
        node {
          childImageSharp {
            sizes {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    slabel:allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "completions2"}}) {
      edges {
        node {
          childImageSharp {
            sizes {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
  
`