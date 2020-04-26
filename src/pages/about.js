import React from "react"
import { Link } from "gatsby"
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutusCom from "../components/aboutuscom"
const About = () => (
  <Layout>
    <SEO title="O nas" />
    
    <AboutusCom/>
  </Layout>
)

export default About
