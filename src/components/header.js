import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./css/header.scss"
import {Nav} from 'react-bootstrap'
const Header = ({ siteTitle }) => (
  <header>
    <Nav className="navba"
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item className="navbut">
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
