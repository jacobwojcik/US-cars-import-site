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
                    <Col sm={4}>
                    <FontAwesomeIcon icon={faSearchDollar}  size = '4x' className="iconOffer" />
                        <h2>1.	WYBÓR MODELU</h2>
                        <p>Skontaktuj się z nami– zadzwoń lub napisz. Dzięki naszemu doświadczeniu pomożemy znaleźć Twój samochód marzeń i zrealizować import aut z USA lub Kanady.</p>
                    </Col>
                    <Col sm={4}>
                    <FontAwesomeIcon icon={faCalculator}  size = '4x' className="iconOffer" />
                        <h2>2.	KALKULACJA KOSZTÓW</h2>
                        <p>Dokonamy bezpłatnej kalkulacji kosztów samochodu wraz z uwzględnieniem całej logistyki oraz wprost do Ciebie.</p>
                    </Col>
                    <Col sm={4}>
                    <FontAwesomeIcon icon={faClipboardList}  size = '4x' className="iconOffer" />
                        <h2>3.	ZAMÓWIENIE</h2>
                        <p>Posiadasz już wiedzę, jak przebiega import aut z USA lub Kanady oraz kosztach samochodu z dostawą. Podpisujemy umowę, na podstawie której będziemy mogli zrealizować zamówienie. W umowie określone są etapy płatności oraz forma akceptacji wybranego przez Ciebie samochodu, jeszcze przed zakupem.</p>
                    </Col>
                </Row>
                <Row>
                <Col sm={4}>
                <FontAwesomeIcon icon={faCheckSquare}  size = '4x' className="iconOffer" />

                        <h2>4.	REALIZACJA ZAMÓWIENIA</h2>
                        <p> Na tym etapie przedstawiamy oferty samochodów. Spełniane są określone wspólnie kryteria, przede wszystkim nie kupujemy samochodu, którego nie zaakceptujesz.</p>
                    </Col>
                    <Col sm={4}>
                    <FontAwesomeIcon icon={faAngleDoubleRight}  size = '4x' className="iconOffer" />

                        <h2>5.	ZREALIZOWANY ZAKUP</h2>
                        <p>Po zakupie zaakceptowanego samochodu, przystępujemy do realizacji formalności oraz  logistyki związanej z dostawą samochodu do portu, z którego będzie wysłany do Polski,frachtem morskim a następnie odprawą celną, formalnościami i dostawą do naszej siedziby.</p>
                    </Col>
                    <Col sm={4}>
                    <FontAwesomeIcon icon={faCarAlt}  size = '4x' className="iconOffer" />

                        <h2>6.	PRZYGOTOWANIE AUTA DO ODBIORU</h2>
                        <p>Przed odbiorem auta, wykonujemy bezpłatny przegląd w naszym serwisie. Na Twoje życzenie możemy dokonać takich rzeczy, jak korekta oświetlenia oraz montaż dodatkowych akcesoriów.</p>
                    </Col>
                </Row>
            </Container>
            
            
        </section>

    )
}
