import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Container } from "react-bootstrap"

import logo from "../images/logo-am--light.svg"

const Menu = () => (
  <>
    <Navbar expand="lg">
      <Container>
        <Nav className="mr-auto">
          <Link to="/">
            <img src={logo} alt="Home" />
          </Link>
        </Nav>

        <Nav className="ml-auto">
          <a className="menu-link" href="http://ashvinmotye.github.io/projects/">Projects</a>
        </Nav>
      </Container>
    </Navbar>
  </>
)

export default Menu
