import React from "react"
import { Carousel } from "react-bootstrap"
import Car1 from "../../../gatimages/imagecarousel1"
import Car2 from "../../../gatimages/imagecarousel2"
import Car3 from "../../../gatimages/imagecarousel3"
import "../carousels.scss"

export default function Carousels() {
  return (
    <section className="carouselMain">
      <Carousel>
        <Carousel.Item>
          <Car1 />
          <Carousel.Caption>
            <h2 className="animated zoomIn slow">UScars Import</h2>
            <h3 className="animated zoomIn slow">Najlepsze samochody z USA</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Car2 />
          <Carousel.Caption>
            <h2 className="animated zoomIn slow">UScars Import</h2>
            <h3 className="animated zoomIn slow">
              Najszybszy i najpewniejszy import
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Car3 />
          <Carousel.Caption>
            <h2 className="animated zoomIn slow">UScars Import</h2>
            <h3 className="animated zoomIn slow">Sprawdź nas już teraz!</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  )
}
