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
                <div className="blog-post">
                    <div className="blog-title-container">
                      <p className="blog-post-date">{frontmatter.date}</p>
                      <h1>{frontmatter.title}</h1>
                      <p className="blog-post-category">
                        {
                          frontmatter.tags.map(tag => {
                            return <a key={tag} href="#">{tag}</a>
                          })
                        }
                      </p>
                    </div>
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
        tags
      }
    }
  }
`