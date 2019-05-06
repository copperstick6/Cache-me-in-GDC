import React, {Component} from 'react';
import {Nav, NavDropdown, Container, Navbar, Dropdown, Button, ButtonGroup, ButtonToolbar, SplitButton} from 'react-bootstrap'

export default class Navigation extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/map">Home</Nav.Link>
          <NavDropdown title="2nd Floor" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/room/2.216">2.216</NavDropdown.Item>
            <NavDropdown.Item href="/room/2nd%20Floor%20Atrium">Atrium</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="3rd Floor" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/room/3rd%20Floor%20Lab">Lab</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="4th Floor" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/room/4.302">4.302/4.304</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
}
