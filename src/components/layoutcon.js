import React from "react"
import PropTypes from "prop-types"
import Header from "./js/Header"
import "./layout.css"

const Layoutcon = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layoutcon.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layoutcon
