import React from "react"
import Car1 from "../gatimages/aboutimage"
import AboutStyles from "./about.module.scss"

const About = () => {
  return (
    <section className={AboutStyles.aboutus}>
      <div>
        <h1>Kilka słów o nas</h1>
        <h2>
          Klienci, którzy zdecydują się skorzystać z naszych usług, mogą liczyć
          na szybką i fachową pomoc na każdym etapie importu auta z USA bądź
          Kanady. Nie musisz się martwić o formalności – bierzemy to na siebie,
          podobnie jak sprawdzenie czy dom aukcyjny, od którego odkupimy Twoje
          auto rzeczywiście jest partnerem godnym zaufania. Zajmiemy się także
          transportem zza wielkiej wody zakupionego przez Ciebie auta, który
          trafi do Ciebie razem z kluczykami do stacyjki wkrótce po tym, jak
          przekroczy polską granicę.
        </h2>
      </div>
      <div>
        <Car1 />
      </div>
    </section>
  )
}

export default About
