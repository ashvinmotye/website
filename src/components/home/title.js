import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Col } from "react-bootstrap"

import titleStyles from "./title.module.css"

import { FaGithub } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

const Title = () => {
  const myImage = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "ashvin.png"}) {
        childImageSharp {
          fluid(maxWidth: 385) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Col md={6} className={titleStyles.column}>
        <h1 className={titleStyles.title}>ashvin motye</h1>
        <p className={`${titleStyles.links} d-flex links`}>
          <a href="https://github.com/ashvinmotye" target="_blank">
            <FaGithub />
          </a>
          <a href="https://twitter.com/ashvinmotye" target="_blank">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/ashvinmotye/" target="_blank">
            <FaLinkedin />
          </a>
        </p>
        <p className={titleStyles.description}>
          Hi. I'm a Frontend Developer.<br/>
          I have 3+ years experience in developing websites. <br/>
          I am currently focusing on JS frameworks.
        </p>
      </Col>

      <Col md={6} className={titleStyles.column}>
        <div className={titleStyles.image_wrapper}>
          <Img fluid={myImage.file.childImageSharp.fluid} />
        </div>
      </Col>
    </>
  )
}

export default Title
