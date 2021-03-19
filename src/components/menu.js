import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Container } from "react-bootstrap"
import ThemeToggle from "./menu/themeToggle"

import logoLight from "../images/logo-am--light.svg"
import logoDark from "../images/logo-am--dark.svg"

const Menu = () => (
  <>
    <Navbar expand="lg">
      <Container style={{padding: "0 30px"}} className="menu-container">
        <Nav className="menu--left">
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

        <Nav className="menu--right">
          <a className="menu-link" href="http://ashvinmotye.github.io/projects/">Projects</a>

          <ThemeToggle />
        </Nav>
      </Container>
    </Navbar>
  </>
)

export default Menu
