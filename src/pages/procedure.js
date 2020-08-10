import React from "react"
import Layout from "../components/Layouts/Layout"
import SEO from "../components/seo"
import Process from "../components/Procedure/Process"
import AOS from "aos"
import "aos/dist/aos.css"
const Procedure = () => {
  if (typeof window !== "undefined") {
    AOS.init()
  }
  return (
    <Layout>
      <SEO title="Procedura" />

      <Process />
    </Layout>
  )
}

export default Procedure
