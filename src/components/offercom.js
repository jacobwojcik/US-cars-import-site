import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import "./css/offercon.scss"
import 'animate.css/animate.css'
import WOW from "wow.js"


class OfferCom  extends React.Component{
    // componentDidMount(){
    //     new WOW().init();
    //   }
    render(){
    return (
        <section className="secOffer" >
            <Container>
                <Row className="offerP wow slideInLeft">
                    <Col>
                    <h1>Import samochodow z Usa i Kanady</h1>
                    <h3>Czyli to w czym jestesmy najlepsi!</h3>
                    </Col>
                </Row>
                <Row className="offerP wow slideInRight">
                    <Col>
                    <h3>Import</h3>
                    <p>Klienci mają różne potrzeby i oczekiwania, dlatego gwarantujemy przygotowanie indywidualnej oferty dla każdego. Dbamy o wszystkie formalności, łącznie z przygotowaniem przybliżonego kosztorysu. Licytujemy różne pojazdy z Ameryki, nawet te najbardziej luksusowe. W Internecie znajdziesz różne strony z samochodami z USA, jednak jeśli zależy Ci na jakości, profesjonalnej obsłudze i atrakcyjnych cenach – zajrzyj do nas. W galerii zdjęć widoczne są różnorodne pojazdy z Ameryki na sprzedaż, dlatego bez trudu możesz zapoznać się z przykładowymi realizacjami oraz znaleźć wymarzony samochód dla siebie. Strona z autami zza granicy prowadzona jest w sposób przejrzysty i klarowny, dlatego w łatwy i szybki sposób odszukasz interesujące Cię informacje.
                    </p>
                    </Col>
                    
                    
                </Row>
                <Row className="offerP wow slideInLeft">
                    <Col>
                    <h3>Realizacja</h3>
                    <p>Nie wszystkie firmy sprowadzające pojazdy zza granicy są godne zaufania, jednak nas to nie dotyczy. Klientom gwarantujemy pełne bezpieczeństwo oraz uczciwość, a także przeprowadzenie transakcji. Zapewniamy profesjonalny zakup samochodu, niski koszt jego sprowadzenia oraz bezpieczny import pod wskazany adres! Zawsze dokładamy wszelkich starań, by wszystkie usługi były na jak najwyższym poziomie. Kompleksowa organizacja transportu kołowego i morskiego to dla nas codzienność. Decydując się na auta sprowadzane z USA, masz pewność, że zajmiemy się wszystkimi kwestiami, a także pomożemy Ci w załatwieniu niezbędnych formalności. Oferujemy również profesjonalne tłumaczenia dokumentów wraz z wyceną wykonaną przez rzeczoznawcę.
                    </p>
                    </Col>
                </Row>
                <Row className="offerP wow slideInRight">
                    <Col>
                    <h3>Satysfakcja</h3>
                    <p>
                    Różnorodne strony i firmy oferują Klientom sprowadzenie auta z USA. Koszty jednak nierzadko przekraczają możliwości wielu zainteresowanych osób. Chcąc dostosować swoją ofertę do jak największej grupy odbiorców, nasze strony oferują samochody w przystępnych cenach. Potwierdzają to liczne recenzje Klientów, którzy mieli okazję z nami współpracować. Obecnie auta sprowadzane z USA cieszą się coraz większą popularnością, dlatego przede wszystkim warto korzystać z ofert sprawdzonych, zaufanych firm – takich jak nasza. Nie tylko znajdziemy dla Ciebie wymarzony środek transportu, ale również zadbamy o to, byś mógł kupić go w jak najniższej cenie! Posiadamy szeroką siatkę kontaktów z najbardziej znanymi domami aukcyjnymi, dlatego możemy zagwarantować opłacalność zakupu i importu.
                    </p>
                    </Col>
                </Row>
            </Container>
        </section>

    );
}
}
export default OfferCom