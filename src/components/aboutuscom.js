import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie,faChartLine} from '@fortawesome/free-solid-svg-icons'
import "./css/header.scss"



class AboutusCom  extends React.Component{
    
    
    render(){ 
    return (
        <section className="aboutuscom">
            <div>
            <Container>
                    <Row className="abrow">
                    <Col md={6} className="aboutcol1">
                        <FontAwesomeIcon icon={faUserTie}  size = '10x' className="iconCon" />   
                            </Col>
                        <Col md={6} className="aboutcol">
                        <h1 className="blueP">Kilka słów o nas</h1>
                        <p className="blueP">
                        Do naszej specjalizacji należy import samochodów z USA – 
                        uszkodzonych, bezwypadkowych, zabytkowych oraz nowych. Pośredniczymy w zakupie pojazdów
                         osobowych na największych aukcjach w Stanach Zjednoczonych (IAAI, Copart, Manheim).
                          Posiadamy niezbędne doświadczenie dzięki któremu zapewniamy kompleksowość usług oraz
                           możliwie najszybsze sprowadzenie aut z USA. Działamy bez pośredników, dlatego możemy zaoferować naszym klientom najniższe ceny. Na zlecenie organizujemy możliwie najtańszy transport na adres kupującego.
                        </p>
                        </Col>
                        
                        </Row>
                        <Row>
                       
                         <Col md={6} className="aboutcol3">
                            <h1 className="blueP">Dlaczego my?</h1>
                        <p className="blueP">
                        Nasza firma powstała z pasji do motoryzacji.
                        Sprowadzenie samochodu z Ameryki to obecnie rozwiązanie bardzo popularne, za stosunkowo
                         niewielką kwotę można bowiem pozyskać niemalże dowolny pojazd w bardzo atrakcyjnnej
                          cenie! Podstawą naszego działania jest uczciwość i rzetelność, zapewniamy Państwu doradztwo i profesjonalną obsługę. Nasze wieloletnie doświadczenie w imporcie samochodów z USA  jest gwarancją pewnego i udanego zakupu.
                            </p>                       
                         </Col>
                         <Col md={6} className="aboutcol2">
                        <FontAwesomeIcon icon={faChartLine}  size = '10x' className="iconCon" />                   
                         </Col>
                    </Row>
                </Container>
            </div>
        </section>

    );
}
}
export default AboutusCom
