import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./gatimages/logo"
import "./css/headermob.scss"
import {Nav,Navbar,NavDropdown} from 'react-bootstrap'


const Headermob = () => (
  <header>
    <Navbar bg="dark" expand="md">
  <Navbar.Brand ><Link className="navLink" to="/">Strona główna</Link></Navbar.Brand>
  <Navbar.Toggle   aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
  <Nav.Item className="navbut">
    <Nav.Link ><Link className="navLink" to="/about">O nas</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item className="navbut">
    <Nav.Link ><Link className="navLink" to="/offer">Procedura</Link></Nav.Link>
  </Nav.Item >
  <Nav.Item className="navbut">
    <Nav.Link  ><Link className="navLink" to="/completions">Realizacje</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item className="navbut">
    <Nav.Link ><Link className="navLink" to="/calc">Kalkulator kosztów</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item className="navbut">
    <Nav.Link ><Link className="navLink" to="/contact">Kontakt</Link></Nav.Link>
  </Nav.Item>

  <Nav.Item className="navbut">
    <a href="https://www.facebook.com/USAUScars" target="_blank"> <svg className="fbicon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>USCars Fanpage</title><path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/></svg>
</a>
  </Nav.Item>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
  </header>
)

Headermob.propTypes = {
  siteTitle: PropTypes.string,
}

Headermob.defaultProps = {
  siteTitle: ``,
}

export default Headermob
