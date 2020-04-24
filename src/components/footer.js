import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import "./css/footer.scss"

export default function Footer() {
    return (
        <footer>
               <Container>
                   <Row>
                       <Col>
                        <h3>Nie czekaj!</h3>
                        <p>Skontaktuj sie z nami juz teraz!</p>
                        <p>nie krzycz to jest jesZcze nie wystajlowane </p>
                       </Col>
                       <Col>
                            <h3>Kontakt</h3>
                            <p> tel 502 603 263 </p>
                            <p> tel 501 151 463 </p>
                            <p> fb uscars link
                                i inaczej to bedzie wygladalo
                            </p>
                       </Col>
                       <Col>
                            <h3>Znajdziesz nas rowniez:</h3>
                            <h3>fb link</h3>
                            <h3>insta link</h3>

                       </Col>
                   </Row>
               </Container>

        </footer>
    )
}
