import React from 'react'
import {Container,Row,Col,ProgressBar,Image} from 'react-bootstrap'
// import "./css/contact.scss"
import Car1 from "../images/com1.jpg"
import Car2 from "../images/com2.jpg"
import Car3 from "../images/com3.jpg"
import Car4 from "../images/cara.jpg"
import Car5 from "../images/carc.jpg"
import Car6 from "../images/cara.jpg"
import Car7 from "../images/carb.jpg"
import Car8 from "../images/car2.jpg"
import Car9 from "../images/car3.jpg"

export default function Complets() {
    return (
        <section >
            <Container>
            <Row>
                    <Col ><h1 className="blueP">Nasze realizacje</h1> </Col>
                    
                </Row>
                <Row>
                    <Col md={4}><Image src={Car1} thumbnail/> </Col>
                    <Col md={4}><Image src={Car2} thumbnail/> </Col>
                    <Col md={4}><Image src={Car3} thumbnail/> </Col>
                </Row>
                <Row>
                    <Col md={4}><Image src={Car4} thumbnail/> </Col>
                    <Col md={4}><Image src={Car5} thumbnail/> </Col>
                    <Col md={4}><Image src={Car6} thumbnail/> </Col>
                </Row>
                <Row>
                    <Col md={4}><Image src={Car7} thumbnail/> </Col>
                    <Col md={4}><Image src={Car8} thumbnail/> </Col>
                    <Col md={4}><Image src={Car9} thumbnail/> </Col>
                </Row>
            </Container>
            
            
        </section>

    )
}
