import React from "react"
import { Link } from "gatsby"
import {Container,Row,Col,Button,Card} from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/css/completions.scss"
import CompletionsList from "../components/completionslist"
const Completions = () => (
  <Layout>
    <SEO title="Realizacje" />
    <CompletionsList/>
  </Layout>
)

export default Completions