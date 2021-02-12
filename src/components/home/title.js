import React from "react"
import { Col } from "react-bootstrap"

import titleStyles from "./title.module.css"

import { FaGithub } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

const Title = () => (
  <Col md={6} className={titleStyles.column}>
    <h1 className={titleStyles.title}>ashvin motye</h1>
    <p className={`${titleStyles.links} d-flex links`}>
      <a href="https://github.com/ashvinmotye">
        <FaGithub />
      </a>
      <a href="https://twitter.com/ashvinmotye">
        <FaTwitter />
      </a>
      <a href="https://www.linkedin.com/in/ashvinmotye/">
        <FaLinkedin />
      </a>
    </p>
  </Col>
)

export default Title
