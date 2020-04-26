import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Container,Row,Col} from 'react-bootstrap'
import Iframe from 'react-iframe'
import "./css/marketing.scss"
import 'animate.css/animate.css'
import WOW from "wow.js"



class Offers extends React.Component{
    // componentDidMount(){
    //   new WOW().init();
    // }
    render(){
return (
  <section className="sec3 wow fadeInUp">
      <div>
      <Container>
                    <Row>
                        <Col>
                       <h1> Nasze aktualne oferty </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                        <Iframe url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FUSAUScars%2Fposts%2F240096900674169&show_text=false&width=552&height=805&appId"
                            width="550px"
                            height="918px"
                        />
                        </Col>
                        <Col sm={6}>
                        <Iframe url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FUSAUScars%2Fposts%2F237959220887937&show_text=true&width=552&height=805&appId"
                            width="552px"
                            height="805"
                        />
                        </Col>
                        <Row>
                        <Col sm={6}>
                        <Iframe url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FUSAUScars%2Fposts%2F233717334645459&show_text=true&width=552&height=805&appId"
                            width="552px"
                            height="805px"
                        />
                        </Col>
                        <Col sm={6}>
                        <Iframe url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FUSAUScars%2Fposts%2F232901921393667&show_text=true&width=552&height=805&appId"
                            width="552px"
                            height="805px"
                        />
                        </Col>
                        </Row>

                        
                    </Row>
                </Container>
                </div>
  </section>
);
    }
}

export default Offers
