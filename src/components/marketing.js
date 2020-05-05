import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Container,Row,Col, ProgressBar} from 'react-bootstrap'
import "./css/marketing.scss"

const Marketing = () => (
  <section className="sec2">
      <div>
      <Container>
                    <Row>
                       <Col>
                       <ProgressBar striped variant="success" animated now={100}label={`100%`} />
                       <h3>Zadowolonych klientów</h3>
                       </Col>
                       </Row>
                       <Row><Col>
                       <ProgressBar striped variant="info" animated now={100} label={`7245`} />
                       <h3>Zrealizowanych zamówień</h3>
                       </Col>
                       </Row>
                       <Row><Col>
                       <ProgressBar striped variant="danger" animated now={100} label={`15`} />
                       <h3>Lat w branży</h3>
                       </Col>
                    </Row>
                </Container>
                </div>
  </section>
)

export default Marketing
