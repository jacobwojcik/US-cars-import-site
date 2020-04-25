import React from 'react'
import {Carousel} from 'react-bootstrap'
import Image1 from "./gatimages/image1"
import "./css/carousels.scss"

export default function Carousels() {
    return (
      <section className="karuzela">
        <Carousel>
        <Carousel.Item>
        <Image1/>
          <Carousel.Caption>
            <h3>Us Cars</h3>
            <p>Najlepsze samochody wprost z USA</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        
        <Image1/>
          <Carousel.Caption>
            <h3>Us Cars</h3>
            <p>Najszybszy i najpewniejszy import</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        
        <Image1/>
          <Carousel.Caption>
            <h3>Us Cars</h3>
            <p>Sprawdz nas juz teraz!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </section>
    )
}
