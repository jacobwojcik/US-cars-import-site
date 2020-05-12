import React from "react"
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import "./css/marketing.scss"
import Com1 from "./gatimages/complets1"
import Com2 from "./gatimages/complets2"
import Com3 from "./gatimages/complets3"

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
              <Card.Img variant="top" src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/95538727_244784436872082_816924782816657408_n.jpg?_nc_cat=109&_nc_sid=730e14&_nc_oc=AQknZ_D_oTzBFancQ3RhBPrZmwMi75J_9yHfUJYC733vsfQumrtj_DfljrpyLlT87kk&_nc_ht=scontent-waw1-1.xx&oh=3ebf3a4e192f8fc9a2ec01492d1e5e27&oe=5EDD9FB4"></Card.Img>
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
              <Card.Img variant="top" src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/95923590_246262173390975_3497585434718896128_n.jpg?_nc_cat=107&_nc_sid=730e14&_nc_oc=AQmJzrDS0qlpDm1JMntjbB6ixYTqheTfxNDvu5Wlhg9uVaNjUuBN_ygFwcsgro5Fnds&_nc_ht=scontent-waw1-1.xx&oh=693bf057ae26422d9ab9aae6254503fd&oe=5EE0D207" />
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
              <Card.Img variant="top" src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQlnS-RQwTb9WvkDgY9XGi6czLUgTkAHAkQfwTXBv-P3H0oY1z6sj8UvsHOp3gUw8FY&_nc_ht=scontent-waw1-1.xx&oh=83443214cbcf1f378bc8a3da498b6ee2&oe=5EDDA986" />
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
