import React from "react"


import Layout from "../components/layout"

import Aboutus from "../components/aboutus"
import Aboutus2 from "../components/aboutus2"
import SEO from "../components/seo"
import Opinions from "../components/opinions"
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
    
    <SEO title="Strona główna" />

    <Carousels/>
    <Carouselsmob/>

    <Aboutus/>
    <Aboutus2/>
    <Opinions/>
    <Marketing/>
    <Offers/>
    <Map/>
  </Layout>
)

export default IndexPage
