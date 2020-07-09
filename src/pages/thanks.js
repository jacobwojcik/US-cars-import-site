import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contactStyles from "../components/css/contact.module.scss"

const Thanks = () => (
  <Layout>
    <SEO title="Dziękujemy" />
    <h1 className={contactStyles.thanksPage}>Dziękujemy za wiadomość!</h1>
  </Layout>
)

export default Thanks
