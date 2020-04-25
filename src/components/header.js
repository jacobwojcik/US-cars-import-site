import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./css/header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import {Container,Row,Col} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import Logo from "./gatimages/logo"

const Header = ({ siteTitle }) => (
  <header>
    <Nav className="navba"
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
> <Logo/>
  <Nav.Item className="navbut" id="1nav">
    <Nav.Link ><Link className="navLink" to="/">Strona glowna</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item className="navbut">
    <Nav.Link ><Link className="navLink" to="/about">O nas</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item className="navbut">
    <Nav.Link ><Link className="navLink" to="/offer">Oferta</Link></Nav.Link>
  </Nav.Item >
  <Nav.Item className="navbut">
    <Nav.Link  ><Link className="navLink" to="/completions">Realizacje</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item className="navbut">
    <Nav.Link ><Link className="navLink" to="/contact">Kontakt</Link></Nav.Link>
  </Nav.Item>

  <Nav.Item className="navbut">
    <a href="https://www.facebook.com/USAUScars" target="_blank"><FontAwesomeIcon icon={faFacebook} className="iconhead" size = '2x' /></a>
  </Nav.Item>
  <Nav.Item className="navbut">
    <a href="https://www.instagram.com/uscars_import/?hl=pl&fbclid=IwAR0ZVCdEGhZ1ZXbxZoNMSon-RGgEeKWB3C3ki-UfTA26Jt_YexXKEiOX_CA" target="_blank" >  <FontAwesomeIcon icon={faInstagramSquare} className="iconhead2" size = '2x' />
</a>
  </Nav.Item>
  

  
    
 
  
</Nav>


  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
