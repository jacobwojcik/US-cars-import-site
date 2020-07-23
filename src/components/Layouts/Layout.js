import React from "react"
import PropTypes from "prop-types"
import Header from "./Header/Header"
import Footer from "./Footers/Footer/Footer"
import Footermob from "./Footers/FooterMobile/FooterMob"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Footermob />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
