import React from "react"
import { Row, Col, Form, Button } from "react-bootstrap"
import "./css/calculator.scss"

export default class Calc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      place: "ABILENE",
      auction: 0,
      commission: 0,
      embark: 0,
      custom: 0,
      delivery: "",
      sum: 0,
      dol: "4.15",
      eur: "4.50",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChangePlace = this.handleChangePlace.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })

    //currency rates

    fetch("https://api.exchangeratesapi.io/latest?base=USD")
      .then(res => res.json())
      .then(data => {
        let dolrate = data.rates.PLN
        this.setState({ dol: dolrate })
      })
    fetch("https://api.exchangeratesapi.io/latest?base=EUR")
      .then(res => res.json())
      .then(data => {
        let eurate = data.rates.PLN
        this.setState({ eur: eurate })
      })
  }
  handleChangePlace(event) {
    this.setState({ place: event.target.value })
  }

  handleSubmit(event) {
    let city = this.state.place
    let carPrice = Number(this.state.value)
    let n1
    let n2

    if (Number(this.state.value) < 1000) {
      n1 = 150
    } else if (
      Number(this.state.value) >= 1000 &&
      Number(this.state.value) < 1200
    ) {
      n1 = 200
    } else if (
      Number(this.state.value) >= 1200 &&
      Number(this.state.value) < 1300
    ) {
      n1 = 225
    } else if (
      Number(this.state.value) >= 1300 &&
      Number(this.state.value) < 1400
    ) {
      n1 = 240
    } else if (
      Number(this.state.value) >= 1400 &&
      Number(this.state.value) < 1500
    ) {
      n1 = 250
    } else if (
      Number(this.state.value) >= 1500 &&
      Number(this.state.value) < 1600
    ) {
      n1 = 260
    } else if (
      Number(this.state.value) >= 1600 &&
      Number(this.state.value) < 1700
    ) {
      n1 = 275
    } else if (
      Number(this.state.value) >= 1700 &&
      Number(this.state.value) < 2000
    ) {
      n1 = 285
    } else if (
      Number(this.state.value) >= 1800 &&
      Number(this.state.value) < 2000
    ) {
      n1 = 300
    } else if (
      Number(this.state.value) >= 2000 &&
      Number(this.state.value) < 2400
    ) {
      n1 = 325
    } else if (
      Number(this.state.value) >= 2400 &&
      Number(this.state.value) < 2500
    ) {
      n1 = 335
    } else if (
      Number(this.state.value) >= 2500 &&
      Number(this.state.value) < 3000
    ) {
      n1 = 350
    } else if (
      Number(this.state.value) >= 3000 &&
      Number(this.state.value) < 3500
    ) {
      n1 = 400
    } else if (
      Number(this.state.value) >= 3500 &&
      Number(this.state.value) < 4000
    ) {
      n1 = 450
    } else if (
      Number(this.state.value) >= 4000 &&
      Number(this.state.value) < 4500
    ) {
      n1 = 475
    } else if (
      Number(this.state.value) >= 4500 &&
      Number(this.state.value) < 5000
    ) {
      n1 = 500
    } else if (
      Number(this.state.value) >= 5000 &&
      Number(this.state.value) < 6000
    ) {
      n1 = 525
    } else if (
      Number(this.state.value) >= 6000 &&
      Number(this.state.value) < 7500
    ) {
      n1 = 550
    } else if (
      Number(this.state.value) >= 7500 &&
      Number(this.state.value) < 10000
    ) {
      n1 = 575
    } else if (
      Number(this.state.value) >= 10000 &&
      Number(this.state.value) < 15000
    ) {
      n1 = 600
    } else {
      n1 = Math.ceil(Number(this.state.value) * 0.04)
    }

    if (Number(this.state.value) < 100) {
      n2 = 0
    } else if (
      Number(this.state.value) >= 100 &&
      Number(this.state.value) < 500
    ) {
      n2 = 39
    } else if (
      Number(this.state.value) >= 500 &&
      Number(this.state.value) < 1000
    ) {
      n2 = 49
    } else if (
      Number(this.state.value) >= 1000 &&
      Number(this.state.value) < 1500
    ) {
      n2 = 69
    } else if (
      Number(this.state.value) >= 1500 &&
      Number(this.state.value) < 2000
    ) {
      n2 = 79
    } else if (
      Number(this.state.value) >= 2000 &&
      Number(this.state.value) < 4000
    ) {
      n2 = 89
    } else if (
      Number(this.state.value) >= 4000 &&
      Number(this.state.value) < 6000
    ) {
      n2 = 99
    } else if (
      Number(this.state.value) >= 6000 &&
      Number(this.state.value) < 8000
    ) {
      n2 = 119
    } else {
      n2 = 129
    }

    let n6
    const listOfCities = {
      ABILENE: 1320,
      ALBUQUERQUE: 1520,
      ALTOONA: 1200,
      AMARILLO: 1445,
      ANTELOPE: 1570,
      APPLETON: 1410,
      "ATLANTA EAST": 1045,
      "ATLANTA NORTH": 1075,
      "ATLANTA SOUTH": 1045,
      "ATLANTA WEST": 1045,
      AUSTIN: 1165,
      ANAHEIM: 1320,
      "ACE - Carson": 1320,
      "ACE - Perris": 1320,
      "Akron-Canton": 1265,
      ANDREWS: 1415,
      Asheville: 1170,
      Ashland: 1515,
      "Avenel New Jersey": 920,
      BAKERSFIELD: 1415,
      BALTIMORE: 1075,
      "BATON ROUGE": 1290,
      BILLINGS: 2250,
      BIRMINGHAM: 1200,
      BOISE: 2100,
      "BOSTON - SHIRLEY": 1170,
      "BOWLING GREEN": 1390,
      BRIDGEPORT: 1045,
      BUCKHANNON: 1450,
      BUFFALO: 1295,
      BURLINGTON: 1265,
      CANDIA: 1200,
      CARTERSVILLE: 1075,
      CASPER: 2190,
      "CENTRAL NEW JERSEY": 920,
      CHAMBERSBURG: 1170,
      CHARLESTON: 1015,
      CHARLOTTE: 1140,
      CHATTANOOGA: 1235,
      "CHICAGO NORTH": 1190,
      "CHICAGO SOUTH": 1190,
      "CHICAGO WEST": 1190,
      "CHINA GROVE": 1110,
      CINCINATTI: 1250,
      CLEARWATER: 1140,
      CLEVELAND: 1265,
      "COLORADO SPRINGS": 1725,
      COLTON: 1350,
      "COLUMBIA MO": 1500,
      COLUMBIA: 1045,
      COLUMBUS: 1250,
      CONCORD: 1140,
      "CORPUS CHRISTI": 1195,
      "CRASHEDTOYS ATLANTA": 1075,
      "CRASHEDTOYS EAST BETHEL": 1440,
      "CRASHEDTOYS MINEEAPOLIS": 1500,
      "CRASHEDTOYS SACRAMENTO": 1540,
      CULPEPER: 1265,
      DALLAS: 1195,
      DANVILLE: 1265,
      DAVENPORT: 1440,
      DAYTON: 1250,
      Denver: 1725,
      "DES MOINES": 1500,
      DETROIT: 1325,
      DOTHAN: 1140,
      DUNDALK: 1110,
      "EAST BAY": 1540,
      "EL PASO": 1445,
      ERIE: 1360,
      EUGENE: 1790,
      EXETER: 1200,
      FARGO: 2000,
      FAYETTEVILLE: 1415,
      FLINT: 1370,
      FONTANA: 1320,
      "FORT PIERCE": 1140,
      "FORT MYERS": 1170,
      "FORT WAYNE": 1195,
      "FORT WORTH NORTH": 1225,
      FREDERICKSBURG: 1265,
      FREMONT: 1540,
      FRESNO: 1510,
      "FT. PIERCE": 1140,
      "FT. WORTH": 1195,
      "GLASSBORO EAST": 950,
      GRAHAM: 1975,
      "GRAND RAPIDS": 1450,
      GREENSBORO: 1140,
      GREENVILLE: 1075,
      GRENADA: 1475,
      "GULF COAST": 1445,
      HAMMOND: 1195,
      HAMPTON: 1265,
      HARRISBURG: 1015,
      HARTFORD: 1015,
      "HAYWARD - DESERT": 1510,
      HAYWARD: 1540,
      HELENA: 2375,
      "HIGH DESERT": 1420,
      "HONOLULU (LIHUE)": 5050,
      HOUSTON: 1040,
      HUNTSVILLE: 1170,
      "IA - CRASHEDTOYS ELDRIDGE": 1500,
      INDIANAPOLIS: 1095,
      IONIA: 1500,
      JACKSON: 1445,
      JACKSONVILLE: 985,
      "KANSAS CITY": 1540,
      KINCHELOE: 1875,
      KNOXVILLE: 1200,
      LAFAYETTE: 1290,
      LANSING: 1450,
      "LAS VEGAS": 1540,
      LAUREL: 1110,
      LEXINGTON: 1045,
      LINCOLN: 1595,
      "LITTLE ROCK": 1415,
      LITTLETON: 1725,
      "LONG BEACH": 1320,
      "LONG ISLAND": 1020,
      LONGVIEW: 1225,
      "LOS ANGELES": 1320,
      LOUISVILLE: 1295,
      LUBBOCK: 1445,
      LUFKIN: 1195,
      LUMBERTON: 1175,
      LYMAN: 1235,
      MACON: 1045,
      MADISON: 1315,
      MANCHESTER: 1200,
      MARTINEZ: 1540,
      MCALLEN: 1290,
      MEBANE: 1140,
      MEMPHIS: 1295,
      METRO: 1110,
      MIAMI: 1200,
      MILWAUKEE: 1540,
      MINNEAPOLIS: 1725,
      MISSOULA: 2600,
      MOBILE: 1200,
      MOCKSVILLE: 1140,
      MONTGOMERY: 1140,
      NASHVILLE: 1235,
      "NEW CASTLE": 1075,
      "NEW ORLEANS": 1290,
      NEWBURGH: 985,
      "NORTH BOSTON": 1170,
      "NORTH CARLESTON": 1020,
      "NORTH HOLLYWOOD": 1385,
      "NORTH SEATTLE": 1975,
      "NORTHERN NEW JERSEY": 920,
      "NORTHERN VIRGINIA": 1265,
      "OKLAHOMA CITY": 1415,
      OMAHA: 1750,
      ORLANDO: 1075,
      PADUCAH: 1295,
      PASCO: 2100,
      PENSACOLA: 1200,
      PEORIA: 1250,
      "PERIAN BASIN": 1445,
      PHILADELPHIA: 985,
      PHOENIX: 1540,
      PITTSBURGH: 1265,
      PORTAGE: 1375,
      PORTLAND: 1820,
      PROVIDENCE: 1200,
      PULASKI: 1265,
      "PUNTA GORDA": 1200,
      PUYALLUP: 1975,
      RALEIGH: 1110,
      "RANCHO CUCAMONGA": 1350,
      RENO: 1725,
      RICHMOND: 1140,
      RIVERSIDE: 1320,
      ROANOKE: 1265,
      ROCHESTER: 1235,
      ROSEDALE: 1075,
      SACRAMENTO: 1540,
      "SALT LAKE CITY": 1790,
      "SAN ANTONIO": 1200,
      "SAN BERNARDINO": 1320,
      "SAN DIEGO": 1415,
      "SAN JOSE": 1540,
      SAVANNAH: 920,
      SCRANTON: 1075,
      SEAFORD: 1075,
      SEATTLE: 1975,
      "SHADY SPRING": 1450,
      SHREVERPORT: 1290,
      SIKESTON: 1435,
      "SIOUX FALLS": 1815,
      "SO SACRAMENTO": 1540,
      SOMERVILLE: 920,
      "SOUTH BEND": 1220,
      "SOUTH BOSTON": 1170,
      "SOUTHERN ILLINOIS": 1250,
      "SOUTHERN NEW JERSEY": 985,
      SPARTANBURG: 1075,
      "SPIECIALTY DIVISION": 1190,
      SPOKANE: 2100,
      SPRINGFIELD: 1565,
      "ST. CLOUD": 1545,
      "ST. LOUIS": 1220,
      SUFFOLK: 1265,
      "SUN VALLEY": 1385,
      SYRACUSE: 1140,
      TALLAHASSEE: 1170,
      TAMPA: 1140,
      TANNER: 1170,
      TAUNTON: 1170,
      TEMPLETON: 1170,
      TIDEWATER: 1200,
      TIFTON: 1265,
      TRENTON: 1045,
      TUCSON: 920,
      TULSA: 1635,
      VALLEJO: 1415,
      "VAN NUYS": 1540,
      WACO: 1350,
      WALTON: 1290,
      WASHINGTON: 1250,
      "WEST PALM BEACH": 1110,
      "WEST WARREN": 1200,
      "WESTERN COLORADO": 1170,
      WHEELING: 2100,
      WICHITA: 1190,
      WILMINGTON: 1170,
      "YORK HAVEN": 1075,
      "YORK SPRINGS": 1075,
    }

    n6 = listOfCities[city] + 600
    let n3 = 59
    let n4 = n1 + n2 + n3 + carPrice
    let n5 = (n4 + n6) * this.state.dol //dollar
    n4 /= 4
    n4 *= 0.29
    n4 *= this.state.eur //euro
    n4 += 2000
    n5 = Math.floor(n5 + n4 + 3900)

    this.setState({ auction: n1 })
    this.setState({ commission: n2 })
    this.setState({ embark: n3 })
    this.setState({ custom: n4 })
    this.setState({ sum: n5 })
    this.setState({ delivery: n6 })
  }

  render() {
    return (
      <section className="calculator">
        <Form>
          <h1 className="blueP">Kalkulator kosztów</h1>
          <Form.Group as={Row} controlId="formHorizontal">
            <Col sm={2}></Col>
            <Form.Label column sm={4}>
              <p className="blueP">Kwota ($)</p>
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                type="number"
                placeholder="Wprowadź kwote"
                value={this.state.value}
                onChange={this.handleChange}
                onKeyPress={event => {
                  if (event.key === "Enter") {
                    event.preventDefault()
                    this.handleSubmit()
                  }
                }}
              />
            </Col>
            <Col sm={3}></Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontal">
            <Col sm={2}></Col>
            <Form.Label column sm={4}>
              <p className="blueP">Plac</p>
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                as="select"
                type="text"
                value={this.state.place}
                onChange={this.handleChangePlace}
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
                <option>ACE - Carson</option>
                <option>ACE - Perris</option>
                <option>Akron-Canton</option>
                <option>ANDREWS</option>
                <option>Asheville</option>
                <option>Ashland</option>
                <option>Avenel New Jerse</option>y<option>BAKERSFIELD</option>
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

          <Row className="calcBut">
            <Col>
              <Button variant="primary" onClick={this.handleSubmit}>
                Potwierdź
              </Button>
            </Col>
          </Row>

          <Row>
            <Col sm={2}></Col>
            <Col sm={4} className="calcCol2">
              <p className="blueP">Szacowany koszt całkowity</p>
            </Col>
            <Col sm={4} className="calcCol2">
              <h1 className="test2">{this.state.sum}pln</h1>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
            <Col>
              <p className="calcText">
                Koszt oszacowywany jest na podstawie kosztu samochodu, prowizji
                serwisu aukcyjnego, kosztu transportu, wysokości cła oraz
                prowizjii UScars.
              </p>
            </Col>
          </Row>
          {/* <h1 className="test2">DD {this.state.dol}</h1>
    <h1 className="test2">DD {this.state.eur}</h1> */}
          {/* <h1 className="test2">{this.state.auction}$</h1>
    <h1 className="test2">{this.state.commission}$</h1>
    <h1 className="test2">{this.state.embark}$</h1>
    <h1 className="test2">{this.state.custom}$</h1>
  <Row></Row> */}
        </Form>
      </section>
    )
  }
}
