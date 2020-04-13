import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Container } from "react-bootstrap"

import logo from "../images/icon.png"

const Menu = () => (
  <>
    <Navbar expand="lg">
      <Container>
        <Nav className="mr-auto sr-only">
          <Link to="/">
            <img src={logo} alt="Home" />
          </Link>
        </Nav>

        <Nav className="ml-auto"></Nav>
      </Container>
    </Navbar>
  </>
)

export default Menu
