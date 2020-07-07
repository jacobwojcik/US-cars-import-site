import React from "react"
import PropTypes from "prop-types"
import Header from "./js/Header"
import Footer from "./js/Footer"
import Footermob from "./js/FooterMob"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
        <Footer />
        <Footermob />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
