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
          <NavDropdown title="1st Floor" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">1.304</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Basement Lab</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">1.406</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="2nd Floor" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">2.216</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Atrium</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Left Side Classrooms</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">2.104 & Coffeeshop</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="3rd Floor" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Atrium</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Lab</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Research Areas</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="4th Floor" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Atrium</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">4.302 & 4.304</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Research Areas</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="5th Floor" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Atrium</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">5.302 & 5.304</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Research Areas</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="6th Floor" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Atrium</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">6.302 & 6.304</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Research Areas</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="7th Floor" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">SDS Department</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
}
