import React, { useState, useEffect } from "react"
import { Row, Col, Form, Button } from "react-bootstrap"
import calcStyles from "../css/calculator.module.scss"
const { listOfCities } = require("../listCities")

const Calc2 = () => {
  const [states, setValues] = useState({
    value: 0,
    place: "ABILENE",
    auction: 0,
    commission: 0,
    embark: 0,
    custom: 0,
    delivery: 0,
    sum: 0,
    dol: 4.0,
    eur: 4.5,
  })

  useEffect(() => {
    fetch("https://api.exchangeratesapi.io/latest?base=PLN")
      .then(res => res.json())
      .then(data => {
        let dolrate = 1 / data.rates.USD
        let eurorate = 1 / data.rates.EUR
        setValues({ ...states, dol: dolrate, eur: eurorate })
      })
  }, [])

  const handleChangeAmount = e => {
    setValues({ ...states, value: e.target.value })
  }

  const handleChangePlace = e => {
    setValues({ ...states, place: e.target.value })
  }

  const handleSubmit = e => {
    let auctionCharge

    if (Number(states.value) < 1000) {
      auctionCharge = 150
    } else if (Number(states.value) >= 1000 && Number(states.value) < 1200) {
      auctionCharge = 200
    } else if (Number(states.value) >= 1200 && Number(states.value) < 1300) {
      auctionCharge = 225
    } else if (Number(states.value) >= 1300 && Number(states.value) < 1400) {
      auctionCharge = 240
    } else if (Number(states.value) >= 1400 && Number(states.value) < 1500) {
      auctionCharge = 250
    } else if (Number(states.value) >= 1500 && Number(states.value) < 1600) {
      auctionCharge = 260
    } else if (Number(states.value) >= 1600 && Number(states.value) < 1700) {
      auctionCharge = 275
    } else if (Number(states.value) >= 1700 && Number(states.value) < 2000) {
      auctionCharge = 285
    } else if (Number(states.value) >= 1800 && Number(states.value) < 2000) {
      auctionCharge = 300
    } else if (Number(states.value) >= 2000 && Number(states.value) < 2400) {
      auctionCharge = 325
    } else if (Number(states.value) >= 2400 && Number(states.value) < 2500) {
      auctionCharge = 335
    } else if (Number(states.value) >= 2500 && Number(states.value) < 3000) {
      auctionCharge = 350
    } else if (Number(states.value) >= 3000 && Number(states.value) < 3500) {
      auctionCharge = 400
    } else if (Number(states.value) >= 3500 && Number(states.value) < 4000) {
      auctionCharge = 450
    } else if (Number(states.value) >= 4000 && Number(states.value) < 4500) {
      auctionCharge = 475
    } else if (Number(states.value) >= 4500 && Number(states.value) < 5000) {
      auctionCharge = 500
    } else if (Number(states.value) >= 5000 && Number(states.value) < 6000) {
      auctionCharge = 525
    } else if (Number(states.value) >= 6000 && Number(states.value) < 7500) {
      auctionCharge = 550
    } else if (Number(states.value) >= 7500 && Number(states.value) < 10000) {
      auctionCharge = 575
    } else if (Number(states.value) >= 10000 && Number(states.value) < 15000) {
      auctionCharge = 600
    } else {
      auctionCharge = Math.ceil(Number(states.value) * 0.04)
    }

    let commissionCharge

    if (Number(states.value) < 100) {
      commissionCharge = 0
    } else if (Number(states.value) >= 100 && Number(states.value) < 500) {
      commissionCharge = 39
    } else if (Number(states.value) >= 500 && Number(states.value) < 1000) {
      commissionCharge = 49
    } else if (Number(states.value) >= 1000 && Number(states.value) < 1500) {
      commissionCharge = 69
    } else if (Number(states.value) >= 1500 && Number(states.value) < 2000) {
      commissionCharge = 79
    } else if (Number(states.value) >= 2000 && Number(states.value) < 4000) {
      commissionCharge = 89
    } else if (Number(states.value) >= 4000 && Number(states.value) < 6000) {
      commissionCharge = 99
    } else if (Number(states.value) >= 6000 && Number(states.value) < 8000) {
      commissionCharge = 119
    } else {
      commissionCharge = 129
    }

    let cityCharge = listOfCities[states.place] + 600
    let customCharge =
      auctionCharge + commissionCharge + 59 + Number(states.value)
    let result = (customCharge + cityCharge) * Number(states.dol)
    customCharge /= 4
    customCharge *= 0.29
    customCharge *= Number(states.eur) //euro
    customCharge += 2000
    result = Math.floor(result + customCharge + 3900)

    setValues({
      ...states,
      auction: auctionCharge,
      commission: commissionCharge,
      embark: 59,
      custom: customCharge,
      sum: result,
      delivery: cityCharge,
    })
  }

  return (
    <section className={calcStyles.calc}>
      <Form>
        <h1>Kalkulator kosztów</h1>
        <Form.Group as={Row} controlId="formHorizontal">
          <Col sm={2}></Col>
          <Form.Label column sm={4}>
            <p>Kwota ($)</p>
          </Form.Label>
          <Col sm={3}>
            <Form.Control
              type="number"
              placeholder="Wprowadź kwote"
              value={states.value}
              onChange={handleChangeAmount}
              onKeyPress={e => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  handleSubmit(e)
                }
              }}
            />
          </Col>
          <Col sm={3}></Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontal">
          <Col sm={2}></Col>
          <Form.Label column sm={4}>
            <p>Plac</p>
          </Form.Label>
          <Col sm={3}>
            <Form.Control
              as="select"
              type="text"
              value={states.place}
              onChange={handleChangePlace}
            >
              <option>ABILENE</option>
              <option>ALBUQUERQUE</option>
              <option>ALTOONA</option>
              <option>AMARILLO</option>
              <option>ANTELOPE</option>
              <option>APPLETON</option>
              <option>ATLANTA EAST</option>
              <option>ATLANTA NORTH</option>
              <option>ATLANTA SOUTH</option>
              <option>ATLANTA WEST</option>
              <option>AUSTIN</option>
              <option>ANAHEIM</option>
              <option>ACE-CARSON</option>
              <option>ACE-PERRIS</option>
              <option>Akron-Canton</option>
              <option>ANDREWS</option>
              <option>ASHEVILLE</option>
              <option>ASHLAND</option>
              <option>AVENEL NEW JERSEY</option>
              <option>BAKERSFIELD</option>
              <option>BALTIMORE</option>
              <option>BATON ROUGE</option>
              <option>BILLINGS</option>
              <option>BIRMINGHAM</option>
              <option>BOISE</option>
              <option>BOSTON - SHIRLEY</option>
              <option>BOWLING GREEN</option>
              <option>BRIDGEPORT</option>
              <option>BUCKHANNON</option>
              <option>BUFFALO</option>
              <option>BURLINGTON</option>
              <option>CANDIA</option>
              <option>CARTERSVILLE</option>
              <option>CASPER</option>
              <option>CENTRAL NEW JERSEY</option>
              <option>CHAMBERSBURG</option>
              <option>CHARLESTON</option>
              <option>CHARLOTTE</option>
              <option>CHATTANOOGA</option>
              <option>CHICAGO NORTH</option>
              <option>CHICAGO SOUTH</option>
              <option>CHICAGO WEST</option>
              <option>CHINA GROVE</option>
              <option>CINCINATTI</option>
              <option>CLEARWATER</option>
              <option>CLEVELAND</option>
              <option>CLEVELAND</option>
              <option>COLORADO SPRINGS</option>
              <option>COLTON</option>
              <option>COLUMBIA MO</option>
              <option>COLUMBIA</option>
              <option>COLUMBUS</option>
              <option>CONCORD</option>
              <option>CORPUS CHRISTI</option>
              <option>CRASHEDTOYS ATLANTA</option>
              <option>CRASHEDTOYS EAST BETHEL</option>
              <option>CRASHEDTOYS MINEEAPOLIS</option>
              <option>CRASHEDTOYS SACRAMENTO</option>
              <option>CULPEPER</option>
              <option>DALLAS</option>
              <option>DANVILLE</option>
              <option>DAVENPORT</option>
              <option>DAYTON</option>
              <option>Denver</option>
              <option>DES MOINES</option>
              <option>DETROIT</option>
              <option>DOTHAN</option>
              <option>DUNDALK</option>
              <option>EAST BAY</option>
              <option>EL PASO</option>
              <option>ERIE</option>
              <option>EUGENE</option>
              <option>EXETER</option>
              <option>FARGO</option>
              <option>FAYETTEVILLE</option>
              <option>FLINT</option>
              <option>FONTANA</option>
              <option>FORT PIERCE</option>
              <option>FORT MYERS</option>
              <option>FORT WAYNE</option>
              <option>FORT WORTH NORTH</option>
              <option>FREDERICKSBURG</option>
              <option>FREMONT</option>
              <option>FRESNO</option>
              <option>FT. PIERCE</option>
              <option>FT. WORTH</option>
              <option>GLASSBORO EAST</option>
              <option>GRAHAM</option>
              <option>GRAND RAPIDS</option>
              <option>GREENSBORO</option>
              <option>GREENVILLE</option>
              <option>GRENADA</option>
              <option>GULF COAST</option>
              <option>HAMMOND</option>
              <option>HAMPTON</option>
              <option>HARRISBURG</option>
              <option>HARTFORD</option>
              <option>HAYWARD - DESERT</option>
              <option>HAYWARD</option>
              <option>HELENA</option>
              <option>HIGH DESERT</option>
              <option>HONOLULU (LIHUE)</option>
              <option>HOUSTON</option>
              <option>HUNTSVILLE</option>
              <option>IA - CRASHEDTOYS ELDRIDGE</option>
              <option>INDIANAPOLIS</option>
              <option>IONIA</option>
              <option>JACKSON</option>
              <option>JACKSONVILLE</option>
              <option>KANSAS CITY</option>
              <option>KINCHELOE</option>
              <option>KNOXVILLE</option>
              <option>LAFAYETTE</option>
              <option>LANSING</option>
              <option>LAS VEGAS</option>
              <option>LAUREL</option>
              <option>LEXINGTON</option>
              <option>LINCOLN</option>
              <option>LITTLE ROCK</option>
              <option>LITTLETON</option>
              <option>LONG BEACH</option>
              <option>LONG ISLAND</option>
              <option>LONGVIEW</option>
              <option>LOS ANGELES</option>
              <option>LOUISVILLE</option>
              <option>LUBBOCK</option>
              <option>LUFKIN</option>
              <option>LUMBERTON</option>
              <option>LYMAN</option>
              <option>MACON</option>
              <option>MADISON</option>
              <option>MANCHESTER</option>
              <option>MARTINEZ</option>
              <option>MCALLEN</option>
              <option>MEBANE</option>
              <option>MEMPHIS</option>
              <option>METRO</option>
              <option>MIAMI</option>
              <option>MILWAUKEE</option>
              <option>MINNEAPOLIS</option>
              <option>MISSOULA</option>
              <option>MOBILE</option>
              <option>MOCKSVILLE</option>
              <option>MONTGOMERY</option>
              <option>NASHVILLE</option>
              <option>NEW CASTLE</option>
              <option>NEW ORLEANS</option>
              <option>NEWBURGH</option>
              <option>NORTH BOSTON</option>
              <option>NORTH CARLESTON</option>
              <option>NORTH HOLLYWOOD</option>
              <option>NORTH SEATTLE</option>
              <option>NORTHERN NEW JERSEY</option>
              <option>NORTHERN VIRGINIA</option>
              <option>OKLAHOMA CITY</option>
              <option>OMAHA</option>
              <option>ORLANDO</option>
              <option>PADUCAH</option>
              <option>PASCO</option>
              <option>PENSACOLA</option>
              <option>PEORIA</option>
              <option>PERIAN BASIN</option>
              <option>PHILADELPHIA</option>
              <option>PHOENIX</option>
              <option>PITTSBURGH</option>
              <option>PORTAGE</option>
              <option>PORTLAND</option>
              <option>PROVIDENCE</option>
              <option>PULASKI</option>
              <option>PUNTA GORDA</option>
              <option>PUYALLUP</option>
              <option>RALEIGH</option>
              <option>RANCHO CUCAMONGA</option>
              <option>RENO</option>
              <option>RICHMOND</option>
              <option>RIVERSIDE</option>
              <option>ROANOKE</option>
              <option>ROCHESTER</option>
              <option>ROSEDALE</option>
              <option>SACRAMENTO</option>
              <option>SALT LAKE CITY</option>
              <option>SAN ANTONIO</option>
              <option>SAN BERNARDINO</option>
              <option>SAN DIEGO</option>
              <option>SAN JOSE</option>
              <option>SAVANNAH</option>
              <option>SCRANTON</option>
              <option>SEAFORD</option>
              <option>SEATTLE</option>
              <option>SHADY SPRING</option>
              <option>SHREVERPORT</option>
              <option>SIKESTON</option>
              <option>SIOUX FALLS</option>
              <option>SO SACRAMENTO</option>
              <option>SOMERVILLE</option>
              <option>SOUTH BEND</option>
              <option>SOUTH BOSTON</option>
              <option>SOUTHERN ILLINOIS</option>
              <option>SOUTHERN NEW JERSEY</option>
              <option>SPARTANBURG</option>
              <option>SPIECIALTY DIVISION</option>
              <option>SPOKANE</option>
              <option>SPRINGFIELD</option>
              <option>ST. CLOUD</option>
              <option>ST. LOUIS</option>
              <option>SUFFOLK</option>
              <option>SUN VALLEY</option>
              <option>SYRACUSE</option>
              <option>TALLAHASSEE</option>
              <option>TAMPA</option>
              <option>TANNER</option>
              <option>TAUNTON</option>
              <option>TEMPLETON</option>
              <option>TIDEWATER</option>
              <option>TIFTON</option>
              <option>TRENTON</option>
              <option>TUCSON</option>
              <option>TULSA</option>
              <option>VALLEJO</option>
              <option>VAN NUYS</option>
              <option>WACO</option>
              <option>WALTON</option>
              <option>WASHINGTON</option>
              <option>WEST PALM BEACH</option>
              <option>WEST WARREN</option>
              <option>WESTERN COLORADO</option>
              <option>WHEELING</option>
              <option>WICHITA</option>
              <option>WILMINGTON</option>
              <option>YORK HAVEN</option>
              <option>YORK SPRINGS</option>
            </Form.Control>
          </Col>
          <Col sm={3}></Col>
        </Form.Group>

        <Row className={calcStyles.buttonArea}>
          <Col>
            <Button variant="primary" onClick={handleSubmit}>
              Potwierdź
            </Button>
          </Col>
        </Row>

        <Row>
          <Col sm={2}></Col>
          <Col sm={4} className={calcStyles.calcCol}>
            <p>Szacowany koszt całkowity</p>
          </Col>
          <Col sm={4} className={calcStyles.calcCol}>
            <h1>{states.sum} pln</h1>
          </Col>
          <Col sm={2}></Col>
        </Row>
        <Row>
          <Col>
            <p className={calcStyles.bottomText}>
              Koszt oszacowywany jest na podstawie kosztu samochodu, prowizji
              serwisu aukcyjnego, kosztu transportu, wysokości cła oraz
              prowizjii UScars.
            </p>
          </Col>
        </Row>
      </Form>
    </section>
  )
}

export default Calc2
