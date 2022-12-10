import React, { Component } from "react"
import { Navbar, Nav, NavItem } from "react-bootstrap"

class Navigation extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar>
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <NavItem href="/">
                  <Nav.Link href="/">Home</Nav.Link>
                </NavItem>
                <NavItem href="/projects">
                  <Nav.Link href="/projects">Projects</Nav.Link>
                </NavItem>
                <NavItem href="/article">
                  <Nav.Link href="/article">Article</Nav.Link>
                </NavItem>
                <NavItem href="/contact">
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    )
  }
}

export default Navigation
