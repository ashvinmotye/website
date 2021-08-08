import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Decoration from "../components/home/decoration"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <>
      <Layout pageInfo={{ pageName: `Tag '${tag}'` }}>
        <SEO title={`Tag '${tag}'`} />
          <div className="blog-post-container">
            <h1>{tagHeader}</h1>
            <ul class="tags-articles">
              {edges.map(({ node }) => {
                const { title, slug, date } = node.frontmatter
                return (
                  <li key={slug} className="blog-post--link">
                    <Link to={slug}>{title}</Link>
                    <span className="blog-post--date">{date}</span>
                  </li>
                )
              })}
            </ul>

            <Link to="/tags" className="underline-link">All tags</Link>
          </div>
      </Layout>

      <Decoration />
    </>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "DD MMM YYYY")
          }
        }
      }
    }
  }
`