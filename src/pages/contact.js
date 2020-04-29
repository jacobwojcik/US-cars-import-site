import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faPhone,faMapMarkedAlt,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {Container,Row,Col} from 'react-bootstrap'
import Layoutcon from "../components/layoutcon"
import SEO from "../components/seo"
import Back from "../components/gatimages/backk"
import "../components/css/contact.scss"
import "@fortawesome/fontawesome-svg-core"
import "@fortawesome/free-brands-svg-icons"
import "@fortawesome/free-solid-svg-icons"
import "@fortawesome/free-regular-svg-icons"
import "@fortawesome/react-fontawesome"

const Contact = () => (
  <Layoutcon>
    <SEO title="Kontakt" />
    <section className="contactSec">
      <Container>
        <Row>
          <Col >
          <h1>
            Skontaktuj sie z nami
          </h1>

          </Col>

        </Row>
        <Row>
          <Col>
         <h2>Skontaktuj sie z nami przez Fanpage na Facebooku lub telefonicznie</h2>

          </Col>
          
        </Row>
        <Row>
          <Col sm={6} className="colcon">
          <FontAwesomeIcon icon={faFacebook}  size = '5x' className="iconCon" />
          <h3>Facebook</h3>
          <a href="https://www.facebook.com/USAUScars" target="_blank"><p class="conP">Us cars</p></a>
          </Col>
          <Col sm={6} className="colcon">
          <FontAwesomeIcon icon={faPhone}  size = '5x' className="iconCon" />
          <h3>telefon</h3>
          <p class="conP">502 603 263</p>
          <p class="conP">501 151 463</p>
          </Col>
        </Row>
        <Row>
          <Col sm={6} className="colcon">
          <FontAwesomeIcon icon={faMapMarkedAlt}  size = '5x' className="iconCon" />
          <h3>Lokalizacja</h3>
          <p class="conP">ul.Szkotnik 2B</p>
          <p class="conP">33-100 Tarnow</p>
          </Col>
          <Col sm={6} className="colcon">
          <FontAwesomeIcon icon={faEnvelope}  size = '5x' className="iconCon" />
          <h3>E-mail</h3>
          <p class="conP">kontakt.uscars@gmail.com</p>
          
          
          </Col>
        </Row>
        <Row>
          <Col>
            
        </Col>
        </Row>

      </Container>
      
    </section>
    
    </Layoutcon>
)

export default Contact