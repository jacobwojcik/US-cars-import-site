import React from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Calc from "../components/calculator"

const Calculator = () => (
  <Layout>
      {/* <Helmet>
        <script src={withPrefix('script.js')} type="text/javascript" />
    </Helmet> */}
    <SEO title="Kalkulator kosztow" />
    
   <Calc/>
    
  </Layout>
)

export default Calculator