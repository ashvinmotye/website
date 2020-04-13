import React from "react"
import { Container, Row } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Title from "../components/home/title"
import Right from "../components/home/right"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`ashvin`, `motye`, `portfolio`]} />
    <Container className="px-0">
      <Row>
        <Title />
        <Right />
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
