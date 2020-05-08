import React from "react"
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
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
          <Col kg={4} className="offerCol">
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/94497131_240096630674196_4162021797442617344_n.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_oc=AQksu3ShZ2IFGlpSvfZS0I3RiCgKjdhzfu1_j1vsWY0k3UDifO9QJH5-LOwu3HY0rFk&_nc_ht=scontent-waw1-1.xx&oh=f48bbf4a28c5d44dc47a354570f09cdd&oe=5ECECDFD" />
              <Card.Body>
                <Card.Title>2018 AUDI RS3</Card.Title>
                <Card.Text>
                <p>- Silnik 2.5L 400km </p>
                <p>- Jeden z lepszych silników na rynku! </p>
                <p>- 26 tys. km. przebiegu</p>
                <p>- Auto odpala i jeździ</p>
                </Card.Text>
                <a href="https://www.facebook.com/USAUScars/posts/233717334645459" target="_blank"><Button variant="light">Sprawdź więcej!</Button></a>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="offerCol">
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93868885_233717064645486_8519292172506234880_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_oc=AQmvWNBEJBDpSt9Gll5KDM1FldSWfyTtgE1EmnlH7W_sCXdH-APFH0nzx8u9AWcouM8&_nc_ht=scontent-waw1-1.xx&oh=5bc8c0be577cb7ee7208f9d7ac02fd3c&oe=5ECE0832" />
              <Card.Body>
                <Card.Title> 2019 AUDI Q8 PREMIUM PLUS S-LINE </Card.Title>
                <Card.Text>
                <p>- Silnik 3.0L 340km </p>
                <p>- Napęd Quattro</p>
                <p>- 15 tys. km. przebiegu</p>
                <p>- Auto odpala i jeździ</p>
                </Card.Text>
                <a href="https://www.facebook.com/USAUScars/posts/232901921393667" target="_blank"><Button variant="light">Sprawdź więcej!</Button></a>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="offerCol">
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93399832_232901631393696_8964954806821060608_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_oc=AQk6S_86SxrcDIah7DDxCPcEVsl0JnYAXiTmdpeD7M48QoywtD-JdFSDHMsfqNaNypY&_nc_ht=scontent-waw1-1.xx&oh=2b9ebe2c69b27b20ab77d6a645e9e447&oe=5ECD7376" />
              <Card.Body>
                <Card.Title>2017 MERCEDES-BENZ C 43 AMG</Card.Title>
                <Card.Text>
                <p>- Silnik 3.0L 367km </p>
                <p>- Napęd 4matic</p>
                <p>- 39 tys. km. przebiegu</p>
                <p>- Auto odpala i jeździ</p>
                </Card.Text>
                <a href="https://www.facebook.com/USAUScars/posts/240096900674169" target="_blank"><Button variant="light">Sprawdź więcej!</Button></a>
              </Card.Body>
            </Card>
          </Col>
          </Row>
          
        
      </Container>
         
  </section>
)

export default Offers
