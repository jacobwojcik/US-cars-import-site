import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import "./css/header.scss"

import 'animate.css/animate.css'
export default function Aboutus2() {
    return (
        <section className="backImg">
            <div>
                <Container >
                    <Row >
                        <Col >
                            <h1 className="opinionP">Dlaczego my?</h1>
                        </Col>
                    </Row>
                    <Row className="aboutRow">
                        <Col className="aboutCol" >
                        <h3 className="whiteP"> Nasza firma powstała z pasji do motoryzacji. Posiadamy bardzo atrakcyjne ceny transportu lądowego i morskiego oraz stałą prowizję, która jest niezależna od wysokości kwoty zakupu sprowadzanego auta z USA.
                        
                           Podstawą naszego działania jest uczciwość i rzetelność, zapewniamy Państwu doradztwo i profesjonalną obsługę. Nasze wieloletnie doświadczenie w imporcie samochodów z USA  jest gwarancją pewnego i udanego zakupu.</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>

    )
}
