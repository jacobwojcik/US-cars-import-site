import React from "react"
import AboutStyles from "../css/aboutus.module.scss"

const Aboutusmob = () => {
  return (
    <section className={AboutStyles.aboutusmob}>
      <h1>Cechuje nas:</h1>
      <div className={AboutStyles.wrappermob}>
        <div className={AboutStyles.bgmob}>
          <h1>PROFESJONALIZM</h1>
        </div>
        <div className={AboutStyles.bgmob}>
          <h1>SZYBKOŚĆ</h1>
        </div>
        <div className={AboutStyles.bgmob}>
          <h1>SUMIENNOŚĆ</h1>
        </div>
        <div className={AboutStyles.bgmob}>
          <h1>100% SATYSFAKCJI</h1>
        </div>
      </div>
    </section>
  )
}

export default Aboutusmob
