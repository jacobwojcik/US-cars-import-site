import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Container,Row,Col} from 'react-bootstrap'
import "./css/marketing.scss"
import 'animate.css/animate.css'
const Marketing = () => (
  <section className="sec2">
      <div>
      <Container>
                    <Row>
                       <Col>
                       <h1 className="animated infinite swing  ">9393 </h1>
                       <h3>zrealizowanych zamowien</h3>
                       </Col>
                       <Col>
                       <h1 className="animated infinite swing  ">100 % </h1>
                       <h3>zadowolonych klientow</h3>
                       </Col>
                       <Col>
                       <h1 className="animated infinite swing  ">15 lat</h1>
                       <h3>w branzy</h3>
                       </Col>
                    </Row>
                </Container>
                </div>
  </section>
)

export default Marketing
