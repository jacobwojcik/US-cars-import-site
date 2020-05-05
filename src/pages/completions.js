import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import ComList from "../components/com"
import Complets from "../components/complets"

import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Lightbox from '../components/lightbox'
import { Container } from "react-bootstrap"
import "../components/css/offercom.scss"
const Completions = ({ data }) => (
  <Layout>
    <SEO title="Realizacje" />
    <Container className="lbox">
    <Lightbox images={data.allFile.edges} />
    </Container>
   
    
    
  </Layout>
)

Completions.propTypes = {
  data: PropTypes.object.isRequired,
}


export default Completions

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "completions"}}) {
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