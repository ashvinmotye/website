import React from "react"
import { graphql, Link } from "gatsby" 

import Layout from "../components/layout"
import SEO from "../components/seo"

import Decoration from "../components/home/decoration"

const Blog = ({ data: { allMarkdownRemark : { nodes : posts }}}) => {
  return (
    <>
      <Layout pageInfo={{ pageName: "blog" }}>
        <SEO title="Blog" keywords={[`ashvin`, `motye`, `blog`]} />

        <div className="blog-post-container">
          <h1>Blog</h1>

          <div className="blog-posts">
            {
              posts.map(post => {
                const { slug, title, date } = post.frontmatter;
                return (
                  <div className="blog-post--link" key={post.id}>
                    <Link to={slug}>{title}</Link>
                    <span className="blog-post--date">{date}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
        
      </Layout>

      <Decoration />
    </>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        id
        frontmatter {
          title
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`

export default Blog
