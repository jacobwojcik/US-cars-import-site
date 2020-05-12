import React from 'react'
import {Carousel} from 'react-bootstrap'
import Car1 from "../images/maincar7.jpg"
import Car2 from "../images/maincar5.jpg"
import Car3 from "../images/maincar1.jpg"
import "./css/carousels.scss"


export default function Carousels() {
    return (
      <section className="karuzela">
        <Carousel>
        <Carousel.Item>
       <img src={Car1} />  
          <Carousel.Caption>
            
            <h2 className="carou animated zoomIn slow">UScars Import</h2>
            <h3 className="carou animated zoomIn slow">Najlepsze samochody wprost z USA</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        
        <img src={Car2} /> 
          <Carousel.Caption>
            <h2 className="carou animated zoomIn slow">UScars Import</h2>
            <h3 className="carou animated zoomIn slow">Najszybszy i najpewniejszy import</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        
        <img src={Car3} /> 
          <Carousel.Caption>
            <h2 className="carou animated zoomIn slow">UScars Import</h2>
            <h3 className="carou animated zoomIn slow">Sprawdz nas juz teraz!</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </section>
    )
}
