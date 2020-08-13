import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.scss"
import { Nav, Navbar } from "react-bootstrap"
import Logo from "./logoheader"

const Header = () => (
  <header>
    <Navbar expand="md">
      <Navbar.Brand>
        <Link className={headerStyles.navLink} to="/">
          Strona główna
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" bg="light" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item className={headerStyles.navbut}>
            <Nav.Link>
              <Link className={headerStyles.navLink} to="/about">
                O nas
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={headerStyles.navbut}>
            <Nav.Link>
              <Link className={headerStyles.navLink} to="/procedure">
                Procedura
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={headerStyles.navbut}>
            <Nav.Link>
              <Link className={headerStyles.navLink} to="/completions">
                Realizacje
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={headerStyles.navbut}>
            <Nav.Link>
              <Link className={headerStyles.navLink} to="/calc">
                Kalkulator kosztów
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={headerStyles.navbut}>
            <Nav.Link>
              <Link className={headerStyles.navLink} to="/contact">
                Kontakt
              </Link>
            </Nav.Link>
          </Nav.Item>

          {/* <Nav.Item className={headerStyles.navbut}>
            <a
              href="https://www.facebook.com/USAUScars"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Logo />
            </a>
          </Nav.Item> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
