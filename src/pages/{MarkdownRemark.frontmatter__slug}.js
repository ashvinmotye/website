import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Decoration from "../components/home/decoration"

const Template = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <>
        <Layout pageInfo={{ pageName: frontmatter.title }}>
            <SEO title={frontmatter.title} />

            <div className="blog-post-container">
                <div className="blog-image">
                    <img src={frontmatter.cover} alt={frontmatter.title}/>
                </div>

                <div className="blog-post">
                    <h1>{frontmatter.title}</h1>
                    <h2>{frontmatter.date}</h2>
                    <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>

            </div>
        </Layout>

        <Decoration />
    </>
  )
}

export default Template

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        cover
      }
    }
  }
`