import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import "./css/header.scss"
import Pic1 from './gatimages/pic1'


class AboutusCom  extends React.Component{
    
    
    render(){
    return (
        <section className="aboutuscom">
            <div>
            <Container>
                    <Row>
                        <Col sm={6}>
                        <h1>Kim jestesmy?</h1>
                        <p>
                        Specjalizujemy się poszukiwaniu i zakupie samochodow
                         w Stanach Zjednoczonych i Kanadzie,
                          oraz całą procedurą logistyczną.
                           Posiadamy własny transport, mechaników 
                           oraz firmę detailingową. Każde auto przed
                            zakupem jest przez nas weryfikowane. Cieszymy sie pelnym
                            zaaufaniem i gronem zadowolonych klientow. W branzy jestesmy obecni od wielu lat
                            , wiemy co to profesjonalizm i potrafimy spenlic oczekiwania klienta.
                            Skontaktuj sie z nami, a samochod twoich marzen trafi do ciebie w najblizszym czasie!
                            
                        </p>
                        </Col>
                        <Col sm={6}>
                            <Pic1/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>

    );
}
}
export default AboutusCom
