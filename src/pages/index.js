import React from "react"
import Layout from "../components/layout"
import Aboutus from "../components/js/Aboutus"
import Aboutus2 from "../components/aboutus2"
import SEO from "../components/seo"
import Opinions from "../components/js/Opinions"
import Marketing from "../components/js/Marketing"
import Offers from "../components/js/Offers"
import Map from "../components/js/Map"
import Carousels from "../components/js/Carousel"
import Carouselsmob from "../components/js/Carouselmobile"
import "@fortawesome/fontawesome-svg-core"
import "@fortawesome/free-brands-svg-icons"
import "@fortawesome/free-solid-svg-icons"
import "@fortawesome/free-regular-svg-icons"
import "@fortawesome/react-fontawesome"
import "../components/css/bootstrapstyles.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Strona główna" />

    <Carousels />
    <Carouselsmob />

    <Aboutus />
    <Aboutus2 />
    <Opinions />
    <Marketing />
    <Offers />
    <Map />
  </Layout>
)

export default IndexPage
