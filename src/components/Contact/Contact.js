import React from "react"
import { FaFacebook, FaMapMarkedAlt, FaEnvelope, FaPhone } from "react-icons/fa"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

import styles from "./contact.module.scss"

const Contact = () => {
  return (
    <section className={styles.sectionContact}>
      <div className={styles.outer}>
        <div className={styles.contactInfo}>
          <h1 style={{ textAlign: "center" }}>Kontakt</h1>
          <div>
            <div>
              <FaFacebook size="4em" color="blue" />
            </div>
            <div>
              <a
                href="https://www.facebook.com/USAUScars"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>UScars Import Fanpage</h2>
              </a>
            </div>
          </div>
          <div>
            <div>
              <FaPhone size="4em" color="blue" />
            </div>
            <div>
              <h2 className={styles.mainView}>
                <a href="tel:502603263">502 603 263 </a> lub
                <a href="tel:501151463"> 501 151 463 </a>
              </h2>
              <h2 className={styles.mobileView}>
                <section>
                  <a href="tel:502603263">502 603 263 </a>
                </section>
                <section>
                  <a href="tel:501151463"> 501 151 463 </a>
                </section>
              </h2>
            </div>
          </div>
          <div>
            <div>
              <FaMapMarkedAlt size="4em" color="blue" />
            </div>
            <div>
              <h2>ul.Gumniska 10, Tarnów</h2>
            </div>
          </div>
          <div>
            <div>
              <FaEnvelope size="4em" color="blue" />
            </div>
            <div>
              <h2>
                <a
                  className={styles.mainView}
                  href="mailto:kontakt.uscars@gmail.com"
                >
                  kontakt.uscars@gmail.com
                </a>
                <a
                  className={styles.mobileView}
                  href="mailto:kontakt.uscars@gmail.com"
                >
                  kontakt.uscars @gmail.com
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.outer}>
        <div className={styles.contactForm}>
          <Container className={styles.con}>
            <Row>
              <Col>
                <h1>Lub napisz odrazu!</h1>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form
                  // className={styles.contactForm}
                  name="contact"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  action="/thanks/"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <Form.Row>
                    <Col md={6}>
                      <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Imię i nazwisko</Form.Label>
                        <Form.Control
                          name="name"
                          type="text"
                          placeholder="Wprowadź dane"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          name="email"
                          type="email"
                          placeholder="Wprowadź email"
                        />
                      </Form.Group>
                    </Col>
                  </Form.Row>

                  <Col>
                    <Form.Group controlId="formGridPhone">
                      <Form.Label>Telefon</Form.Label>
                      <Form.Control
                        name="phone"
                        placeholder="Podaj nr telefonu"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Twoja wiadomość</Form.Label>
                      <Form.Control
                        name="message"
                        as="textarea"
                        rows="10"
                        placeholder="Napisz już teraz!"
                      />
                    </Form.Group>
                  </Col>
                  <Form.Group id="formGridCheckbox">
                    <Form.Check
                      type="checkbox"
                      className="conForm"
                      label="Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w formularzu w celach marketingowych."
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Wyślij!
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  )
}

export default Contact
