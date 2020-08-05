import React from "react"
import { Container, Row } from "react-bootstrap"
import {
  FaSearchDollar,
  FaCalculator,
  FaClipboardList,
  FaCarAlt,
  FaCheckSquare,
  FaAngleDoubleRight,
} from "react-icons/fa"
import ProcedureStyles from "./procedure.module.scss"

export default function Process() {
  return (
    <section className={ProcedureStyles.procedure}>
      <Container>
        <Row>
          <h1>JAK WYBRAĆ I SPROWADZIĆ SAMOCHÓD Z USA LUB KANADY?</h1>
        </Row>
        <div className={ProcedureStyles.procedureRow}>
          <div>
            <FaSearchDollar size="5em" className={ProcedureStyles.icon} />
          </div>
          <div>
            <h2>1. WYBÓR ODPOWIEDNIEGO MODELU</h2>
            <p>
              Współpracę rozpoczynamy od wyszukania odpowiedniego samochodu.
              Następnie auto jest przez nas weryfikowane poprzez Raporty Carfax
              oraz Autocheck. Po sprawdzeniu historii klient otrzymuje od nas
              kosztorys sprowadzenia.{" "}
            </p>
          </div>
        </div>
        <div className={ProcedureStyles.procedureRow}>
          <div>
            <FaCalculator size="5em" className={ProcedureStyles.icon} />
          </div>
          <div>
            <h2>2. UMOWA ORAZ ZALICZKA</h2>
            <p>
              Po dokonaniu wyboru pojazdu, podpisujemy umowę która jest formą
              zabezpieczenia dla obu stron. Klient jest także zobligowany do
              wpłaty kaucji zwrotnej w wysokości 10% kwoty licytacji. W
              przypadku niepomyślnego zakończenia licytacji kaucja jest
              zwracana, bądź pozostaje na poczet kolejnych aukcji.{" "}
            </p>
          </div>
        </div>
        <div className={ProcedureStyles.procedureRow}>
          <div>
            <FaClipboardList size="5em" className={ProcedureStyles.icon} />
          </div>
          <div>
            <h2>3. PŁATNOŚĆ ZA SAMOCHÓD</h2>
            <p>
              Po otrzymaniu informacji o wygranej aukcji, Klient jest
              zobowiązany dokonać pełnej opłaty za koszty związane z zakupem
              oraz transportem samochodu do Europy bezpośrednio na konto firmowe
              w Stanach Zjednoczonych w ciągu 2 dni roboczych. Jest to warunek
              konieczny, aby uniknąć dodatkowo naliczonych opłat.{" "}
            </p>
          </div>
        </div>
        <div className={ProcedureStyles.procedureRow}>
          <div>
            <FaAngleDoubleRight size="5em" className={ProcedureStyles.icon} />
          </div>
          <div>
            <h2>4. TRANSPORT</h2>
            <p>
              Po dokonaniu płatności za samochód, możemy rozpocząć procedurę
              transportu auta do Europy. Zawsze dostarczamy auto do najbliższego
              portu, przez co minimalizujemy koszty transportu lądowego po USA.
              Po dotarciu do portu auto zostaje załadowane do kontenera i
              wyrusza w podróż do Europy. Klient otrzymuje od nas link, w którym
              może monitorować lokalizacje kontenera
            </p>
          </div>
        </div>
        <div className={ProcedureStyles.procedureRow}>
          <div>
            <FaCheckSquare size="5em" className={ProcedureStyles.icon} />
          </div>
          <div>
            <h2>5. ODPRAWA CELNA</h2>
            <p>
              Po dotarciu pojazdu do portu w Bremerhaven organizujemy opłaty
              celno-skarbowe. Po zakończeniu procedury clenia klient płaci
              należności bezpośrednio do agencji celnej.{" "}
            </p>
          </div>
        </div>
        <div className={ProcedureStyles.procedureRow}>
          <div>
            <FaCarAlt size="5em" className={ProcedureStyles.icon} />
          </div>
          <div>
            <h2>6. ODBIÓR SAMOCHODU</h2>
            <p>
              Po zapłacie należności, auto zostaje zwolnione. Wtedy organizujemy
              transport pojazdu pod wybrany przez niego adres. Na życzenie
              klienta możemy zająć się naprawą samochodu oraz wszelkimi
              formalnościami związanymi z tłumaczeniem dokumentów, akcyzą oraz
              przeglądem. Klientowi zostaje jedynie zarejestrować i odebrać swój
              nowy samochód z siedziby naszej firmy.{" "}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
