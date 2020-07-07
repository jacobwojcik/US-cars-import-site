import React from "react"
import { Carousel } from "react-bootstrap"
import Car1 from "../../images/maincar7.jpg"
import Car2 from "../../images/maincar5.jpg"
import Car3 from "../../images/maincar1.jpg"
import "../css/carousels.scss"

export default function Carousels() {
  return (
    <section className="carouselMain">
      <Carousel>
        <Carousel.Item>
          <img src={Car1} alt="Car" />
          <Carousel.Caption>
            <h2 className="animated zoomIn slow">UScars Import</h2>
            <h3 className="animated zoomIn slow">Najlepsze samochody z USA</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Car2} alt="Car" />
          <Carousel.Caption>
            <h2 className="animated zoomIn slow">UScars Import</h2>
            <h3 className="animated zoomIn slow">
              Najszybszy i najpewniejszy import
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Car3} alt="Car" />
          <Carousel.Caption>
            <h2 className="animated zoomIn slow">UScars Import</h2>
            <h3 className="animated zoomIn slow">Sprawdź nas już teraz!</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  )
}
