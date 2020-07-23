import React from "react"
import Layout from "../components/Layouts/Layout"
import Information from "../components/MainSite/Informations/Information"
import Information2 from "../components/MainSite/Informations/Information2"
import SEO from "../components/seo"
import Opinions from "../components/MainSite/Opinions/Opinions"
import Marketing from "../components/MainSite/Marketing/Marketing"
import Offers from "../components/MainSite/Offers/Offers"
import Map from "../components/MainSite/Map/Map"
import Carousel from "../components/MainSite/Carousels/Carousel/Carousel"
import CarouselMob from "../components/MainSite/Carousels/CarouselMobile/Carouselmobile"
import "../components/css/bootstrapstyles.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Strona główna" />
    <Carousel />
    <CarouselMob />
    <Information />
    <Information2 />
    <Opinions />
    <Marketing />
    <Offers />
    <Map />
  </Layout>
)

export default IndexPage
