import React from "react"


import Layout from "../components/layout"

import Aboutus from "../components/aboutus"
import SEO from "../components/seo"

import Marketing from "../components/marketing"
import Offers from "../components/offers"
import Map from "../components/map"
import Carousels from "../components/carousels"
import Carouselsmob from "../components/carouselmobile"
import "@fortawesome/fontawesome-svg-core"
import "@fortawesome/free-brands-svg-icons"
import "@fortawesome/free-solid-svg-icons"
import "@fortawesome/free-regular-svg-icons"
import "@fortawesome/react-fontawesome"

const IndexPage = () => (
  <Layout>
    <SEO title="Strona glowna" />

    <Carousels/>
    <Carouselsmob/>

    <Aboutus/>
    <Marketing/>
    <Offers/>
    <Map/>
  </Layout>
)

export default IndexPage
