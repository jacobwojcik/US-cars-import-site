import React from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import OffersStyles from "../css/offers.module.scss"
import Car1 from "../../images/supra.jpg"
import Car2 from "../../images/bmwi8.jpg"
import Car3 from "../../images/mustang.jpg"

const Offers = () => (
  <section className={OffersStyles.sec5}>
    <Container>
      <Row>
        <Col>
          <h1> Nasze ostatnie realizacje! </h1>
        </Col>
      </Row>
      <Row>
        <Col lg={4} className={OffersStyles.offerCol}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Car1}></Card.Img>
            <Card.Body>
              <Card.Title>2020 TOYOTA SUPRA</Card.Title>
              <Card.Text>
                <p>- Najnowsza na rynku </p>
                <p>- Silnik 3.0L 340km </p>
                <p>- 1263KM!</p>
                <p>- Bardzo mały przebieg!</p>
              </Card.Text>
              <a
                href="https://www.facebook.com/USAUScars/posts/244786016871924"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="danger">Sprawdź więcej!</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} className={OffersStyles.offerCol}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Car2} />
            <Card.Body>
              <Card.Title> 2019 BMW I8 ROADSTER </Card.Title>
              <Card.Text>
                <p>- Silnik 1.5L 374KM </p>
                <p>- 275 kW</p>
                <p>- 5 tys. km. przebiegu</p>
                <p>- Najbogatsza wersja wyposażenia!</p>
              </Card.Text>
              <a
                href="https://www.facebook.com/USAUScars/posts/246263253390867"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="danger">Sprawdź więcej!</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} className={OffersStyles.offerCol}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Car3} />
            <Card.Body>
              <Card.Title>FORD MUSTANG GT</Card.Title>
              <Card.Text>
                <p>- Silnik 3.0L 367km </p>
                <p>- 500KM</p>
                <p>- 39 tys. km. przebiegu</p>
                <p>- Znakomita cena!</p>
              </Card.Text>
              <a
                href="https://www.facebook.com/USAUScars/posts/232209461462913"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="danger">Sprawdź więcej!</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Offers
