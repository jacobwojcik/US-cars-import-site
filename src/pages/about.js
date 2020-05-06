import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutusCom from "../components/aboutuscom"
import AboutusMob from "../components/aboutusmob"
const About = () => (
  <Layout>
    <SEO title="O nas" />
   
    <AboutusCom/>
    <AboutusMob/>
  </Layout> 
)

export default About
