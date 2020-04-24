import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {Carousel} from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <SEO title="Strona glowna" />

    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.hdcarwallpapers.com/thumbs/2016/2017_mercedes_amg_gt_c_roadsters-t2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.hdcarwallpapers.com/thumbs/2016/renault_trezor_concept_4k-t2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.hdcarwallpapers.com/thumbs/2016/renault_trezor_concept-t2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    
    
  </Layout>
)

export default IndexPage
