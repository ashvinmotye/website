/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import Menu from "./menu"
import Footer from "./footer"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container fluid className="px-0 main">
          <Menu pageInfo={pageInfo} />
          <Row noGutters>
            <Col>
              <Container>
                <main>{children}</main>
              </Container>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    )}
  />
)

export default Layout
