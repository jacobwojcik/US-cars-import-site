import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faPhone,faMapMarkedAlt,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import Layoutcon from "../components/layoutcon"
import SEO from "../components/seo"
import "../components/css/contact.scss"
import "@fortawesome/fontawesome-svg-core"
import "@fortawesome/free-brands-svg-icons"
import "@fortawesome/free-solid-svg-icons"
import "@fortawesome/free-regular-svg-icons"
import "@fortawesome/react-fontawesome"
import ContactForm from "../components/contactform"

const Contact = () => (
  <Layoutcon>
    <SEO title="Kontakt" />
    <section className="contactSec">
      <Container>
        <Row>
          <Col >
          <h1 className="blueP"> 
            Skontaktuj się z nami!
          </h1>

          </Col>

        </Row>
        <Row>
          <Col>
         <h2 className="blueP">Skontaktuj się z nami przez Fanpage na Facebooku lub telefonicznie</h2>

          </Col>
          
        </Row>
        <Row>
          <Col sm={6} className="colcon">
          <FontAwesomeIcon icon={faFacebook}  size = '5x' className="iconContact" />
          <h3 className="whiteP">Facebook</h3>
          <a href="https://www.facebook.com/USAUScars" target="_blank"><p class="whiteP">UScars</p></a>
          </Col>
          <Col sm={6} className="colcon">
          <FontAwesomeIcon icon={faPhone}  size = '5x' className="iconContact" />
          <h3 className="whiteP">Telefon</h3>
          <p class="whiteP">502 603 263</p>
          <p class="whiteP">501 151 463</p>
          </Col>
        </Row>
        <Row>
          <Col sm={6} className="colcon">
          <FontAwesomeIcon icon={faMapMarkedAlt}  size = '5x' className="iconContact" />
          <h3 className="whiteP">Lokalizacja</h3>
          <p class="whiteP">ul.Szkotnik 2B</p>
          <p class="whiteP">33-100 Tarnów</p>
          </Col>
          <Col sm={6} className="colcon">
          <FontAwesomeIcon icon={faEnvelope}  size = '5x' className="iconContact" />
          <h3 className="whiteP">E-mail</h3>
          <p class="whiteP">kontakt.uscars@gmail.com</p>
          
          
          </Col>
        </Row>
        <Row>
          <Col>
            
        </Col>
        </Row>

      </Container>
      <ContactForm/>
      
    </section>
    
    </Layoutcon>
)

export default Contact