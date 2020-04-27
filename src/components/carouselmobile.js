import React from 'react'
import {Carousel} from 'react-bootstrap'
import Image1mob from "./gatimages/image1mob"
import Image2mob from "./gatimages/image2mob"
import Image3mob from "./gatimages/image3mob"
import "./css/carousels.scss"

export default function Carouselsmob() {
    return (
      <section className="karuzelamob">
        <Carousel>
        <Carousel.Item>
        <Image1mob/>
          <Carousel.Caption>
            <h3>Us Cars</h3>
            <p>Najlepsze samochody wprost z USA</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        
        <Image2mob/>
          <Carousel.Caption>
            <h3>Us Cars</h3>
            <p>Najszybszy i najpewniejszy import</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        
        <Image3mob/>
          <Carousel.Caption>
            <h3>Us Cars</h3>
            <p>Sprawdz nas juz teraz!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </section>
    )
}
