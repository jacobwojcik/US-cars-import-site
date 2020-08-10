import React from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import OffersStyles from "./offers.module.scss"
import Car1 from "../../gatimages/offer1"
import Car2 from "../../gatimages/offer2"
import Car3 from "../../gatimages/offer3"

const Offers = () => {
  return (
    <section className={OffersStyles.sec5}>
      <Container>
        <Row>
          <Col>
            <h1> Nasze ostatnie realizacje! </h1>
          </Col>
        </Row>
        <Row>
          <Col
            lg={4}
            className={OffersStyles.offerCol}
            data-aos="fade-up"
            data-offset="250"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <Card style={{ width: "18rem" }}>
              <Car1 />
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
          <Col
            lg={4}
            className={OffersStyles.offerCol}
            data-aos="fade-up"
            data-offset="250"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <Card style={{ width: "18rem" }}>
              <Car2 />
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
          <Col
            lg={4}
            className={OffersStyles.offerCol}
            data-aos="fade-up"
            data-offset="250"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <Card style={{ width: "18rem" }}>
              <Car3 />
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
}

export default Offers
