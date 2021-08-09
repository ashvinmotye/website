import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import styles from "./projects.module.scss"

const Projects = () => (
  <Container>
    <Row className={styles.row}>
      <StaticQuery
        query={graphql`
          {
            allMarkdownRemark(limit: 1, sort: {fields: frontmatter___date, order: DESC}) {
              nodes {
                frontmatter {
                  slug
                  title
                  description
                }
              }
            }
          }
        `}
        render={data => {
          const {title, description, slug} = data.allMarkdownRemark.nodes[0].frontmatter;
          return (
            <Col lg={{ span: 4, offset: 4 }} md={6} className={styles.col}>
              <span className={styles.tag}>Article</span>
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>

              <Link to={slug} className="underline-link">Read</Link>
            </Col>
          )
        }
      }
      ></StaticQuery>
      <Col lg={4} md={6}>
        <span className={styles.tag}>Project</span>
        <p className={styles.title}>Memorise</p>
        <p className={styles.description}>Test your retaining power with this pattern game. Memorise the pattern shown and replicate it.</p>

        <a href="https://ashvinmotye.github.io/games/memorise" target="_blank" rel="noreferrer" className="underline-link">Explore</a>
      </Col>
    </Row>
  </Container>
)

export default Projects
