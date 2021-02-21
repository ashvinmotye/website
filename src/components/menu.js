import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Container } from "react-bootstrap"

import logoLight from "../images/logo-am--light.svg"
import logoDark from "../images/logo-am--dark.svg"

const Menu = () => (
  <>
    <Navbar expand="lg">
      <Container style={{padding: "0 15px"}}>
        <Nav className="mr-auto">
          <Link to="/">
            <div 
              className="logo-container"
              style={{
                '--dark': `url(${logoDark})`,
                '--light': `url(${logoLight})`
              }} 
            />
            
            <img src={logoLight} alt="Home" className="sr-only"/>
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
