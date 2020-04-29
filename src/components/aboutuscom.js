import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import "./css/header.scss"



class AboutusCom  extends React.Component{
    
    
    render(){
    return (
        <section className="aboutuscom">
            <div>
            <Container>
                    <Row>
                        <Col sm={6}>
                        <h1>Kilka slow o nas</h1>
                        <p>
                        Firma <strong>Us Cars </strong>powstała , żeby służyć Państwu swoim profesjonalizmem i doświadczeniem w wyborze pewnych aut używanych. Tak jak Państwo, jesteśmy zdania, że rzetelnie sprawdzone auto używane może służyć niezawodnie i cieszyć nowego właściciela.
                        </p>
                        </Col>
                        <Col sm={6}>
                            <p>Klienci, którzy zdecydują się skorzystać z naszych usług, mogą liczyć na szybką i fachową pomoc na każdym etapie importu auta z USA bądź Kanady. Nie musisz się martwić o formalności – bierzemy to na siebie, podobnie jak sprawdzenie czy dom aukcyjny, od którego odkupimy Twoje auto rzeczywiście jest partnerem godnym zaufania. Zajmiemy się także transportem zza wielkiej wody zakupionego przez Ciebie auta, który trafi do Ciebie razem z kluczykami do stacyjki wkrótce po tym, jak przekroczy polską granicę.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>

    );
}
}
export default AboutusCom
