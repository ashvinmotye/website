import React from "react"
import { Container, Row } from "react-bootstrap"
import Title from "../components/home/title"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`ashvin`, `motye`, `portfolio`]} />
    <Container className="px-0">
      <Row>
        <Title />
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
