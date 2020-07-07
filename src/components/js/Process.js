import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSearchDollar,
  faCalculator,
  faClipboardList,
  faCarAlt,
  faCheckSquare,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons"
import ProcedureStyles from "../css/procedure.module.scss"

export default function Process() {
  return (
    <section className={ProcedureStyles.procedure}>
      <Container>
        <Row>
          <h1>JAK WYBRAĆ I SPROWADZIĆ SAMOCHÓD Z USA LUB KANADY?</h1>
          <Col md={4}>
            <FontAwesomeIcon
              icon={faSearchDollar}
              size="4x"
              className={ProcedureStyles.icon}
            />
            <h2>1. WYBÓR ODPOWIEDNIEGO MODELU</h2>
            <p>
              Współpracę rozpoczynamy od wyszukania odpowiedniego samochodu.
              Następnie auto jest przez nas weryfikowane poprzez Raporty Carfax
              oraz Autocheck. Po sprawdzeniu historii klient otrzymuje od nas
              kosztorys sprowadzenia.{" "}
            </p>
          </Col>
          <Col md={4}>
            <FontAwesomeIcon
              icon={faCalculator}
              size="4x"
              className={ProcedureStyles.icon}
            />
            <h2>2. UMOWA ORAZ ZALICZKA</h2>
            <p>
              Po dokonaniu wyboru pojazdu, podpisujemy umowę która jest formą
              zabezpieczenia dla obu stron. Klient jest także zobligowany do
              wpłaty kaucji zwrotnej w wysokości 10% kwoty licytacji. W
              przypadku niepomyślnego zakończenia licytacji kaucja jest
              zwracana, bądź pozostaje na poczet kolejnych aukcji.{" "}
            </p>
          </Col>
          <Col md={4}>
            <FontAwesomeIcon
              icon={faClipboardList}
              size="4x"
              className={ProcedureStyles.icon}
            />
            <h2>3. PŁATNOŚC ZA SAMOCHÓD</h2>
            <p>
              Po otrzymaniu informacji o wygranej aukcji, Klient jest
              zobowiązany dokonać pełnej opłaty za koszty związane z zakupem
              oraz transportem samochodu do Europy bezpośrednio na konto firmowe
              w Stanach Zjednoczonych w ciągu 2 dni roboczych. Jest to warunek
              konieczny, aby uniknąć dodatkowo naliczonych opłat.{" "}
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              size="4x"
              className={ProcedureStyles.icon}
            />

            <h2>4. TRANSPORT</h2>
            <p>
              Po dokonaniu płatności za samochód, możemy rozpocząć procedurę
              transportu auta do Europy. Zawsze dostarczamy auto do najbliższego
              portu, przez co minimalizujemy koszty transportu lądowego po USA.
              Po dotarciu do portu auto zostaje załadowane do kontenera i
              wyrusza w podróż do Europy. Klient otrzymuje od nas link, w którym
              może monitorować lokalizacje kontenera
            </p>
          </Col>
          <Col md={4}>
            <FontAwesomeIcon
              icon={faCheckSquare}
              size="4x"
              className={ProcedureStyles.icon}
            />
            <h2>5. ODPRAWA CELNA</h2>
            <p>
              Po dotarciu pojazdu do portu w Bremerhaven organizujemy opłaty
              celno-skarbowe. Po zakończeniu procedury clenia klient płaci
              należności bezpośrednio do agencji celnej.{" "}
            </p>
          </Col>
          <Col md={4}>
            <FontAwesomeIcon
              icon={faCarAlt}
              size="4x"
              className={ProcedureStyles.icon}
            />

            <h2>6. ODBIÓR SAMOCHODU</h2>
            <p>
              Po zapłacie należności, auto zostaje zwolnione. Wtedy organizujemy
              transport pojazdu pod wybrany przez niego adres. Na życzenie
              klienta możemy zająć się naprawą samochodu oraz wszelkimi
              formalnościami związanymi z tłumaczeniem dokumentów, akcyzą oraz
              przeglądem. Klientowi zostaje jedynie zarejestrować i odebrać swój
              nowy samochód z siedziby naszej firmy.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
