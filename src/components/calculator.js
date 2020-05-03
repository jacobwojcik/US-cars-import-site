import React from 'react'
import {Container,Row,Col,ProgressBar,Form,Button} from 'react-bootstrap'
import "./css/calculator.scss"

export default function Calc() {
    return (
        <section className="calculator">
            <Form>
                <h1>Kalkulator prowizji</h1>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      <p>Kwota ($)</p>
    </Form.Label>
    <Col sm={10}>
      <Form.Control className="kwota"  placeholder="Wprowadz kwote" />
            
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontal">
    <Form.Label column sm={2}>
    <p>Koszt</p>
    </Form.Label>
    <Col sm={10}>
      <Form.Control  placeholder="" />
    </Col>
  </Form.Group>
  

  
</Form>
            
            
        </section>

    )
}
