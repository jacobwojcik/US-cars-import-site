import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import Aboutus from "../components/aboutus"
import SEO from "../components/seo"
import {Carousel} from "react-bootstrap"
import Marketing from "../components/marketing"
import Offers from "../components/offers"
import Map from "../components/map"
import Carousels from "../components/carousels"
const IndexPage = () => (
  <Layout>
    <SEO title="Strona glowna" />

    <Carousels/>
    

    <Aboutus/>
    <Marketing/>
    <Offers/>
    <Map/>
  </Layout>
)

export default IndexPage
