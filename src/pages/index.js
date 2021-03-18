import React from "react"
import { Container, Row } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Title from "../components/home/title"
import Decoration from "../components/home/decoration"
import Loader from "../components/home/loader"

const IndexPage = () => (
  <>
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO title="Home" keywords={[`ashvin`, `motye`, `portfolio`]} />
      <Container className="px-0">
        <Row>
          <Title />
        </Row>
      </Container>

    </Layout>

    <Decoration />
    <Loader />
  </>
)

export default IndexPage
