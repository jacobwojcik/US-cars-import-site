import React from 'react'
import {Container,Row,Col,ProgressBar} from 'react-bootstrap'
import "./css/contact.scss"


export default function Complets() {
    return (
        <section className="complets">
            <Container>
                <Row>
                    <Col sm={4}></Col>
                    <Col sm={4}><h1>Strona w budowie</h1></Col>
                    <Col sm={4}></Col>
                </Row>
                <Row>
                    <Col sm={4}></Col>
                    <Col sm={4}><ProgressBar striped variant="success" animated now={45} /></Col>
                    <Col sm={4}></Col>
                </Row>
            </Container>
            
            
        </section>

    )
}
