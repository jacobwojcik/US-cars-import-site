import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import InfStyles from "./informations.module.scss"
import "animate.css/animate.css"

const Information2 = () => {
  return (
    <section className={InfStyles.backImg}>
      <div>
        <Container>
          <Row>
            <Col>
              <h1>Dlaczego my?</h1>
            </Col>
          </Row>
          <Row className={InfStyles.aboutRow}>
            <Col className={InfStyles.aboutCol}>
              <h3>
                Nasza firma powstała z pasji do motoryzacji. Posiadamy bardzo
                atrakcyjne ceny transportu lądowego i morskiego oraz stałą
                prowizję, która jest niezależna od wysokości kwoty zakupu
                sprowadzanego auta z USA. Podstawą naszego działania jest
                uczciwość i rzetelność, zapewniamy Państwu doradztwo i
                profesjonalną obsługę. Nasze wieloletnie doświadczenie w
                imporcie samochodów z USA jest gwarancją pewnego i udanego
                zakupu.
              </h3>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Information2
