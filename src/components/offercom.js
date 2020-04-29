import React from 'react'
import {Container,Row,Col,ProgressBar,Image} from 'react-bootstrap'
import "./css/contact.scss"


export default function Offercom() {
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
                    <Col sm={4}>
                    {/* <Image src={Car} thumbnail/>  */}
                    </Col>
                </Row>
            </Container>
            
            
        </section>

    )
}
