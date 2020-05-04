/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import { withPrefix, Link } from "gatsby"

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script src={withPrefix('script.js')} type="text/javascript" />

    
    
  ])
}
