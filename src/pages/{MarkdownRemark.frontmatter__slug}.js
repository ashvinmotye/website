import React from "react"
import { graphql, Link } from "gatsby"

// Utilities
import kebabCase from "lodash/kebabCase"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Decoration from "../components/home/decoration"

const Template = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <>
        <Layout pageInfo={{ pageName: frontmatter.title }}>
            <SEO
              title={frontmatter.title}
              description={frontmatter.description}
              image={frontmatter.image.childImageSharp.fixed.src}
            />

            <div className="blog-post-container">
                <div className="blog-post">
                    <div className="blog-title-container">
                      <p className="blog-post-date">{frontmatter.date}</p>
                      <h1>{frontmatter.title}</h1>
                      <p className="blog-post-category">
                        {
                          frontmatter.tags.map(tag => {
                            return <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
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
        description
        image {
          childImageSharp {
            fixed(width: 1200) {
              src
            }
          }
        }
      }
    }
  }
`