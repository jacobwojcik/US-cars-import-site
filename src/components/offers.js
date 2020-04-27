
import React from "react"
import {Container,Row,Col} from 'react-bootstrap'
import Iframe from 'react-iframe'
import "./css/marketing.scss"

const Offers = () => (
  <section className="sec3">
      <Container>
        <Row>
          <Col>
          <h1> Nasze aktualne oferty </h1>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="offerCol">
          <Iframe className="frame" url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FUSAUScars%2Fposts%2F240096900674169&show_text=false&width=552&height=805&appId"
                            width="552px"
                            height="805px"
                        />
          </Col>
          <Col md={4} className="offerCol">
          <Iframe className="frame" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FUSAUScars%2Fposts%2F233717334645459&show_text=true&width=552&height=805&appId"
                             width="552px"
                             height="805px"
                        />
          </Col>
          <Col md={4} className="offerCol">
          <Iframe className="frame" url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FUSAUScars%2Fposts%2F240096900674169&show_text=false&width=552&height=805&appId"
                             width="552px"
                             height="805px"
                        />
          </Col>
          </Row>
          
        
      </Container>
         
  </section>
)

export default Offers
