import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import ComList from "../components/com"
import Complets from "../components/complets"
import 'react-fancybox/lib/fancybox.css'
const Completions = () => (
  <Layout>
    <SEO title="Realizacje" />
    
   <Complets/>
    {/* //<ComList/> */}
    
  </Layout>
)

export default Completions