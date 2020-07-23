import React from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import contactStyles from "./contact.module.scss"

const ContactForm = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="blueP">Lub napisz odrazu!</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form
            className={contactStyles.contactForm}
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
                <Form.Control name="phone" placeholder="Podaj nr telefonu" />
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

            <Button variant="light" type="submit">
              Wyślij!
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
export default ContactForm
