import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Title from "../components/home/title"
import Decoration from "../components/home/decoration"
import Projects from "../components/home/projects"

const IndexPage = () => (
  <>
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO title="Home" keywords={[`ashvin`, `motye`, `portfolio`]} />
      
      <Title />
      
      <Projects />
    </Layout>

    <Decoration />
  </>
)

export default IndexPage
