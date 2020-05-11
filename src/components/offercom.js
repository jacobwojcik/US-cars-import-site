import React from 'react'
import {Container,Row,Col,ProgressBar,Image} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchDollar, faCalculator,faClipboardList,faCarAlt,faCheckSquare,faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import "./css/contact.scss"


export default function Offercom() {
    return (
        <section className="offerC">
            <Container>
                <Row> 
                    <h1 className="htext">JAK WYBRAĆ I SPROWADZIĆ SAMOCHÓD
Z USA LUB KANADY?</h1>
                    <Col md={4}>
                    <FontAwesomeIcon icon={faSearchDollar}  size = '4x' className="iconOffer" />
                        <h2 className="blueP">1.	WYBÓR MODELU</h2>
                        <p className="lBlue">Skontaktuj się z nami– zadzwoń lub napisz. Dzięki naszemu doświadczeniu pomożemy znaleźć Twój samochód marzeń i zrealizować import aut z USA lub Kanady.</p>
                    </Col>
                    <Col md={4}>
                    <FontAwesomeIcon icon={faCalculator}  size = '4x' className="iconOffer" />
                        <h2 className="blueP">2.	KALKULACJA KOSZTÓW</h2>
                        <p className="lBlue">Dokonamy  kalkulacji kosztów samochodu wraz z uwzględnieniem całej logistyki oraz dostarczenia wprost do Ciebie.</p>
                    </Col>
                    <Col md={4}>
                    <FontAwesomeIcon icon={faClipboardList}  size = '4x' className="iconOffer" />
                        <h2 className="blueP">3.	ZAMÓWIENIE</h2>
                        <p className="lBlue">Podpisanie umowy, na podstawie której będziemy mogli zrealizować zamówienie. W umowie określone są etapy płatności oraz forma akceptacji wybranego przez Ciebie samochodu, jeszcze przed zakupem.</p>
                    </Col>
                </Row>
                <Row>
                <Col md={4}>
                <FontAwesomeIcon icon={faCheckSquare}  size = '4x' className="iconOffer" />

                        <h2 className="blueP">4.	REALIZACJA ZAMÓWIENIA</h2>
                        <p className="lBlue">Zakupimy samochód idealny dla ciebie na jednej z oficjalnych aukcji IAAI, Copart, Manheim. Zostanie on wylicytowany w najkorzystniejszej  cenie. </p>
                    </Col>
                    <Col md={4}>
                    <FontAwesomeIcon icon={faAngleDoubleRight}  size = '4x' className="iconOffer" />

                        <h2 className="blueP">5.	ZREALIZOWANY ZAKUP</h2>
                        <p className="lBlue">Po zakupie zaakceptowanego samochodu, przystępujemy do realizacji formalności oraz  logistyki związanej z dostawą samochodu do portu, z którego będzie wysłany do Polski, a następnie odprawą celną, formalnościami i dostawą do naszej siedziby.</p>
                    </Col>
                    <Col md={4}>
                    <FontAwesomeIcon icon={faCarAlt}  size = '4x' className="iconOffer" />

                        <h2 className="blueP">6.	PRZYGOTOWANIE AUTA DO ODBIORU</h2>
                        <p className="lBlue">Dokonamy wszystkich formalności celno-skarbowych, klient odbiera auto w pełni opłacone ze wszystkimi dokumentami, książkami serwisowymi-pozostaje tylko rejestracja.</p>
                    </Col>
                </Row>
            </Container>
            
            
        </section>

    )
}
