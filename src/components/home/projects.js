import React from "react"

import { Container, Row, Col } from "react-bootstrap"

import styles from "./projects.module.scss"

const Projects = () => (
  <Container>
    <Row className={styles.row}>
      <Col lg={{ span: 4, offset: 4 }} md={6} className={styles.col}>
        <span className={styles.tag}>Project</span>
        <p className={styles.title}>Password Generator</p>
        <p className={styles.description}>Do you find yourself in a difficult spot where you need to think of a unique and SECURE password to use for each of your site?</p>

        <a href="https://ashvinmotye.github.io/password/" target="_blank" rel="noreferrer" className="underline-link">Explore</a>
      </Col>

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
