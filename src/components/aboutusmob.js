import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie,faChartLine} from '@fortawesome/free-solid-svg-icons'
import "./css/header.scss"



class AboutusMob  extends React.Component{
    
    
    render(){
    return (
        <section className="aboutusmob">
            <div>
            <Container>
                    <Row >
                    
                        <Col md={6} className="aboutColMob">
                        <h1>Kilka slow o nas</h1>
                        <p>
                        Do maszej specjalizacji należy import samochodów z USA – 
                        uszkodzonych, bezwypadkowych, zabytkowych oraz nowych. Pośredniczymy w zakupie pojazdów
                         osobowych na największych aukcjach w Stanach Zjednoczonych (IAAI, Copart, Manheim).
                          Posiadamy niezbędne doświadczenie dzięki któremu zapewniamy kompleksowość usług oraz
                           możliwie najszybsze sprowadzenie aut z USA. Bazując na licencji dealera samochodowego
                            możemy 
                        brać udział w aukcjach samochodowych dostępnych tylko dla tego typu kontrahentów.
                        </p>
                        </Col>
                        <Col md={6} className="aboutColMob">
                        <FontAwesomeIcon icon={faUserTie}  size = '10x' className="iconCon" />   
                            </Col>
                        
                        </Row>
                        <Row>
                       
                         <Col md={6} className="aboutColMob">
                            <h1>Dlaczego my?</h1>
                        <p>
                        prowadzenie samochodu z Ameryki to obecnie rozwiązanie bardzo popularne, za stosunkowo
                         niewielką kwotę można bowiem pozyskać niemalże dowolny pojazd w bardzo atrakcyjnnej
                          cenie! Nasza firma oferuje bardzo konkurencyjne stawki które korzystnie wyróżniają się
                           także na tle innych firm pośredniczących w kupnie samochodów na akcjach w Stanach.
                            Posiadamy bardzo atrakcyjne ceny transportu lądowego i morskiego oraz stałą prowizję,
                             która jest 
                        niezależna od wysokości kwoty zakupu sprowadzanego auta z USA.
                            </p>                       
                         </Col>
                         <Col md={6} className="aboutColMob">
                        <FontAwesomeIcon icon={faChartLine}  size = '10x' className="iconCon" />                   
                         </Col>
                    </Row>
                </Container>
            </div>
        </section>

    );
}
}
export default AboutusMob
