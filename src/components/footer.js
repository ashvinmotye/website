import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <Container>
      <footer>
        <Row>
          <Col md={6}>
            <p className={`links`}>
              <a href="https://github.com/ashvinmotye" target="_blank" rel="noreferrer">
                <FaGithub />
                <span className="sr-only">Github</span>
              </a>
              <a href="https://twitter.com/ashvinmotye" target="_blank" rel="noreferrer">
                <FaTwitter />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://www.linkedin.com/in/ashvinmotye/" target="_blank" rel="noreferrer">
                <FaLinkedin />
                <span className="sr-only">Linkedin</span>
              </a>
            </p>
          </Col>

          <Col md={6} className="copyright">
            <p>Built by Ashvin Motye with Gatsby</p>
            <p>&copy; 2021</p>
          </Col>
        </Row>
      </footer>
    </Container>
  )
}

export default Footer