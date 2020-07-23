import React from "react"
import { Container, Row, Col, ProgressBar } from "react-bootstrap"
import MarketingStyles from "./marketing.module.scss"

const Marketing = () => (
  <section className={MarketingStyles.sec4}>
    <div>
      <Container>
        <Row>
          <Col>
            <ProgressBar
              className={MarketingStyles.progressbar}
              striped
              variant="success"
              animated
              now={100}
              label={`100%`}
            />
            <h3>Zadowolonych klientów</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProgressBar
              className={MarketingStyles.progressbar}
              striped
              variant="info"
              animated
              now={100}
              label={`820`}
            />
            <h3>Zrealizowanych zamówień</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProgressBar
              className={MarketingStyles.progressbar}
              striped
              variant="danger"
              animated
              now={100}
              label={`3`}
            />
            <h3>Lata w branży</h3>
          </Col>
        </Row>
      </Container>
    </div>
  </section>
)

export default Marketing
