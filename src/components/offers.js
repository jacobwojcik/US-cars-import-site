import React from "react"
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import "./css/marketing.scss"
import Car1 from "../images/supra.jpg"
import Car2 from "../images/bmwi8.jpg"
import Car3 from "../images/mustang.jpg"

const Offers = () => (
  <section className="sec3">
      <Container>
        <Row>
          <Col>
          <h1 className="blueP"> Nasze ostatnie realizacje! </h1>
          </Col>
        </Row>
        <Row>
          <Col lg={4} className="offerCol">
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Car1}></Card.Img>
              <Card.Body>
                <Card.Title>2020 TOYOTA SUPRA</Card.Title>
                <Card.Text>
                <p className="blueP">- Najnowsza na rynku </p>
                <p className="blueP">- Silnik 3.0L 340km </p>
                <p className="blueP">- 1263KM!</p>
                <p className="blueP">- Bardzo mały przebieg!</p>
                </Card.Text>
                <a href="https://www.facebook.com/USAUScars/posts/244786016871924" target="_blank"><Button variant="danger">Sprawdź więcej!</Button></a>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="offerCol">
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Car2} />
              <Card.Body>
                <Card.Title> 2019 BMW I8 ROADSTER </Card.Title>
                <Card.Text>
                <p className="blueP">- Silnik 1.5L 374KM </p>
                <p className="blueP">- 275 kW</p>
                <p className="blueP">- 5 tys. km. przebiegu</p>
                <p className="blueP">- Najbogatsza wersja wyposażenia!</p>
                </Card.Text>
                <a href="https://www.facebook.com/USAUScars/posts/246263253390867" target="_blank"><Button variant="danger">Sprawdź więcej!</Button></a>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="offerCol">
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Car3} />
              <Card.Body>
                <Card.Title>FORD MUSTANG GT</Card.Title>
                <Card.Text>
                <p className="blueP">- Silnik 3.0L 367km </p>
                <p className="blueP">- 500KM</p>
                <p className="blueP">- 39 tys. km. przebiegu</p>
                <p className="blueP">- Znakomita cena!</p>
                </Card.Text>
                <a href="https://www.facebook.com/USAUScars/posts/232209461462913" target="_blank"><Button variant="danger">Sprawdź więcej!</Button></a>
              </Card.Body>
            </Card>
          </Col>
          </Row>
          
        
      </Container>
         
  </section>
)

export default Offers
