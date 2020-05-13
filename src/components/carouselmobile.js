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
        <Image3mob/>
          <Carousel.Caption>
            <h3 className="animated zoomIn slow">UScars Import</h3>
            <p className="animated zoomIn slow">Najlepsze samochody z USA</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        
        <Image2mob/>
          <Carousel.Caption>
            <h3 className="animated zoomIn slow">UScars Import</h3>
            <p className="animated zoomIn slow">Najszybszy i najpewniejszy import</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        
        <Image1mob/>
          <Carousel.Caption>
            <h3 className="animated zoomIn slow">UScars Import</h3>
            <p className="animated zoomIn slow">Sprawdź nas już teraz!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </section>
    )
}
