import React from 'react'
import {Container,Row,Col,ProgressBar,Form,Button} from 'react-bootstrap'

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
            
    };
        
      }
   

      render(){
        return (

            <Container> 
                    <Row>
                    <Col>
                        <h1 className="blueP">Lub napisz odrazu!</h1>
                    </Col>
                    </Row>

                    <Row>
                    <Col>
                    
                    <Form className="contactForm" name="contact" action="/thanks/" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" >
                    <input type="hidden" name="form-name" value="contact" />
                    <Form.Row><Col md={6}>
                    <Form.Group as={Col} controlId="formGridName">
                        
                <Form.Label className="redP">Imię i nazwisko</Form.Label>
                <Form.Control type="text" placeholder="Wprowadź dane"
                />
                </Form.Group>
                </Col>
                <Col md={6}>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="redP">Email</Form.Label>
                <Form.Control type="email" placeholder="Wprowadź email"
                 />
                </Form.Group>
                </Col>
                </Form.Row>
                
            <Col>
            <Form.Group controlId="formGridPhone">
                <Form.Label className="redP">Telefon</Form.Label>
                <Form.Control placeholder="Podaj nr telefonu" 
                />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="redP">Twoja wiadomość</Form.Label>
                <Form.Control as="textarea" rows="10" placeholder="Napisz już teraz!"
                 />
            </Form.Group>
            </Col>
            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" className="conForm" label="Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w formularzu w celach marketingowych." />
            </Form.Group>

            <Button variant="light" type="submit">
                Wyślij!
            </Button>
            </Form>
            </Col>
                    </Row>
                </Container>


)}
    
}
