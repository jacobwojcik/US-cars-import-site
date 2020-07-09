import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Layoutcon from "../components/layoutcon"
import SEO from "../components/seo"
import { FaFacebook, FaMapMarkedAlt, FaEnvelope, FaPhone } from "react-icons/fa"
import ContactForm from "../components/js/Contactform"
import contactStyles from "../components/css/contact.module.scss"

const Contact = () => (
  <Layoutcon>
    <SEO title="Kontakt" />
    <section className={contactStyles.contactSection}>
      <Container>
        <Row>
          <Col>
            <h1>Skontaktuj się z nami!</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>
              Skontaktuj się z nami przez Fanpage na Facebooku lub telefonicznie
            </h2>
          </Col>
        </Row>
        <Row>
          <Col sm={6} className={contactStyles.contactCol}>
            <FaFacebook size="5em" />
            <h3>Facebook</h3>
            <a
              href="https://www.facebook.com/USAUScars"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>UScars</p>
            </a>
          </Col>
          <Col sm={6} className={contactStyles.contactCol}>
            <FaPhone size="5em" />
            <h3>Telefon</h3>
            <p>502 603 263</p>
            <p>501 151 463</p>
          </Col>
        </Row>
        <Row>
          <Col sm={6} className={contactStyles.contactCol}>
            <FaMapMarkedAlt size="5em" />
            <h3>Lokalizacja</h3>
            <p>ul.Szkotnik 2B, Tarnów</p>
          </Col>
          <Col sm={6} className={contactStyles.contactCol}>
            <FaEnvelope size="5em" />
            <h3>E-mail</h3>
            <p>kontakt.uscars@gmail.com</p>
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Container>
      <ContactForm />
    </section>
  </Layoutcon>
)

export default Contact
