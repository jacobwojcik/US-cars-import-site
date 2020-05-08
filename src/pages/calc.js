import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Calc from "../components/calculator"

const Calculator = () => (
  <Layout>
      {/* <Helmet>
        <script src={withPrefix('script.js')} type="text/javascript" />
    </Helmet> */}
    <SEO title="Kalkulator kosztów" />
    
   <Calc/>
    
  </Layout>
)

export default Calculator