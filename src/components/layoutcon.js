/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


import Headermob from "./headermob"

import "./layout.css"

const Layoutcon = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQueryy {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header/> */}
      <Headermob/> 
      <div >
        <main>{children}</main>
        
      </div>
    </>
  )
}

Layoutcon.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layoutcon
