import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Container,Row,Col} from 'react-bootstrap'
import "./css/map.scss"
import Iframe from 'react-iframe'
import 'animate.css/animate.css'
import WOW from "wow.js"

class Map  extends React.Component{
  componentDidMount(){
    new WOW().init();
  }
  render(){
return(
  <section className="sec4 wow fadeInUp">
      <Container>
      <Row>
          <Col>
          
      <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.9602392155907!2d20.97471847332756!3d50.013984166173444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d85d098cfbc75%3A0x8a7bb937f83cd1e3!2sUScars%20-%20Import%20samochod%C3%B3w%20z%20USA!5e0!3m2!1spl!2spl!4v1587763795465!5m2!1spl!2spl"
        width="600px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
        </Col>
        <Col>
        <h2>Znajdziesz nas tutaj!</h2>
        <h3>Lokalizacja:</h3>
        <p>ul.Szkotnik 2B, 33-100 Tarnow</p>
        <h3>Godziny otwarcia:</h3>
        <p>Pon-piatek: 8:00-18:00</p>
        </Col>
        </Row>
                </Container>
  </section>
);
  }
}
export default Map
