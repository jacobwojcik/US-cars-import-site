import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import OpinionStyle from "../css/opinions.module.scss"
import "animate.css/animate.css"

export default function Opinions() {
  return (
    <section className={OpinionStyle.sec3}>
      <Container>
        <Row>
          <Col>
            <h1> Opinie naszych klientów </h1>
          </Col>
        </Row>
        <Row>
          <Col md={4} className={OpinionStyle.opinionCol}>
            <div>
              <svg
                class="bi bi-chat-square-quote-fill"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 2a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-2.5a1 1 0 00-.8.4l-1.9 2.533a1 1 0 01-1.6 0L5.3 12.4a1 1 0 00-.8-.4H2a2 2 0 01-2-2V2zm7.194 2.766c.087.124.163.26.227.401.428.948.393 2.377-.942 3.706a.446.446 0 01-.612.01.405.405 0 01-.011-.59c.419-.416.672-.831.809-1.22-.269.165-.588.26-.93.26C4.775 7.333 4 6.587 4 5.667 4 4.747 4.776 4 5.734 4c.271 0 .528.06.756.166l.008.004c.169.07.327.182.469.324.085.083.161.174.227.272zM11 7.073c-.269.165-.588.26-.93.26-.958 0-1.735-.746-1.735-1.666 0-.92.777-1.667 1.734-1.667.271 0 .528.06.756.166l.008.004c.17.07.327.182.469.324.085.083.161.174.227.272.087.124.164.26.228.401.428.948.392 2.377-.942 3.706a.446.446 0 01-.613.01.405.405 0 01-.011-.59c.42-.416.672-.831.81-1.22z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>Piotr:</p>
              <p>
                Bardzo dobry kontakt, rzetelność i uczciwość.Kontakt z firmą
                fenomenalny prowadzili mnie za "rękę" po wszystkim i odpowiadali
                prawie natychmiastowo na wszystkie moje pytania. Polecam w
                100%!!! Na pewno skorzystam jeszcze nie raz.{" "}
              </p>
            </div>
          </Col>
          <Col md={4} className={OpinionStyle.opinionCol}>
            <div>
              <svg
                class="bi bi-chat-square-quote-fill"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 2a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-2.5a1 1 0 00-.8.4l-1.9 2.533a1 1 0 01-1.6 0L5.3 12.4a1 1 0 00-.8-.4H2a2 2 0 01-2-2V2zm7.194 2.766c.087.124.163.26.227.401.428.948.393 2.377-.942 3.706a.446.446 0 01-.612.01.405.405 0 01-.011-.59c.419-.416.672-.831.809-1.22-.269.165-.588.26-.93.26C4.775 7.333 4 6.587 4 5.667 4 4.747 4.776 4 5.734 4c.271 0 .528.06.756.166l.008.004c.169.07.327.182.469.324.085.083.161.174.227.272zM11 7.073c-.269.165-.588.26-.93.26-.958 0-1.735-.746-1.735-1.666 0-.92.777-1.667 1.734-1.667.271 0 .528.06.756.166l.008.004c.17.07.327.182.469.324.085.083.161.174.227.272.087.124.164.26.228.401.428.948.392 2.377-.942 3.706a.446.446 0 01-.613.01.405.405 0 01-.011-.59c.42-.416.672-.831.81-1.22z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>Oskar:</p>
              <p>
                Wybór, zakup i transport na najlepszym poziomie. Jeśli chodzi o
                prowizje to faktycznie, są najniższe na rynku..Gdy będę szukał
                kolejnego auta pewnie zgłoszę się jeszcze raz. Polecam UScars do
                współpracy
              </p>
            </div>
          </Col>
          <Col md={4} className={OpinionStyle.opinionCol}>
            <div>
              <svg
                class="bi bi-chat-square-quote-fill"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 2a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-2.5a1 1 0 00-.8.4l-1.9 2.533a1 1 0 01-1.6 0L5.3 12.4a1 1 0 00-.8-.4H2a2 2 0 01-2-2V2zm7.194 2.766c.087.124.163.26.227.401.428.948.393 2.377-.942 3.706a.446.446 0 01-.612.01.405.405 0 01-.011-.59c.419-.416.672-.831.809-1.22-.269.165-.588.26-.93.26C4.775 7.333 4 6.587 4 5.667 4 4.747 4.776 4 5.734 4c.271 0 .528.06.756.166l.008.004c.169.07.327.182.469.324.085.083.161.174.227.272zM11 7.073c-.269.165-.588.26-.93.26-.958 0-1.735-.746-1.735-1.666 0-.92.777-1.667 1.734-1.667.271 0 .528.06.756.166l.008.004c.17.07.327.182.469.324.085.083.161.174.227.272.087.124.164.26.228.401.428.948.392 2.377-.942 3.706a.446.446 0 01-.613.01.405.405 0 01-.011-.59c.42-.416.672-.831.81-1.22z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>Cezary:</p>
              <p>
                Jestem bardzo zadowolony ze współpracy z US cars i spokojnie
                mogę polecić wszystkim szukającym auta z za oceanu. Super
                kontakt i kompleksowa obsługa. Z czystym sumieniem mogę polecić
                ta firmę. Oby więcej takich realizacji.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
