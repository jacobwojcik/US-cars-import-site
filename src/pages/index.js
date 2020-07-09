import React from "react"
import Layout from "../components/layout"
import Information from "../components/js/Information"
import Information2 from "../components/js/Information2"
import SEO from "../components/seo"
import Opinions from "../components/js/Opinions"
import Marketing from "../components/js/Marketing"
import Offers from "../components/js/Offers"
import Map from "../components/js/Map"
import Carousels from "../components/js/Carousel"
import Carouselsmob from "../components/js/Carouselmobile"
import "../components/css/bootstrapstyles.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Strona główna" />
    <Carousels />
    <Carouselsmob />
    <Information />
    <Information2 />
    <Opinions />
    <Marketing />
    <Offers />
    <Map />
  </Layout>
)

export default IndexPage
