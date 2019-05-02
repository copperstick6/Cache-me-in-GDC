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
            <NavDropdown.Item href="/room/1.304">1.304</NavDropdown.Item>
            <NavDropdown.Item href="/room/Basement%20Lab">Basement Lab</NavDropdown.Item>
            <NavDropdown.Item href="/room/1.406">1.406</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="2nd Floor" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/room/2.216">2.216</NavDropdown.Item>
            <NavDropdown.Item href="/room/2nd%20Floor%20Atrium">Atrium</NavDropdown.Item>
            <NavDropdown.Item href="/room/2.104">2.104 & Coffeeshop</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="3rd Floor" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/room/3rd%20Floor%20Atrium">Atrium</NavDropdown.Item>
            <NavDropdown.Item href="/room/3rd%20Floor%20Lab">Lab</NavDropdown.Item>
            <NavDropdown.Item href="/room/3rd%20Floor%20Research%20Area">Research Areas</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="4th Floor" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/room/4th%20Floor%20Atrium">Atrium</NavDropdown.Item>
          <NavDropdown.Item href="/room/4.302">4.302</NavDropdown.Item>
          <NavDropdown.Item href="/room/4.304">4.304</NavDropdown.Item>
          <NavDropdown.Item href="/room/4th%20Floor%20Research%20Area">Research Areas</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="5th Floor" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/room/5th%20Floor%20Atrium">Atrium</NavDropdown.Item>
          <NavDropdown.Item href="/room/5.302">4.302</NavDropdown.Item>
          <NavDropdown.Item href="/room/5.304">4.304</NavDropdown.Item>
          <NavDropdown.Item href="/room/5th%20Floor%20Research%20Area">Research Areas</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="6th Floor" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/room/6th%20Floor%20Atrium">Atrium</NavDropdown.Item>
          <NavDropdown.Item href="/room/6.302">6.202</NavDropdown.Item>
          <NavDropdown.Item href="/room/6.304">6.302</NavDropdown.Item>
          <NavDropdown.Item href="/room/6th%20Floor%20Research%20Area">Research Areas</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="7th Floor" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/room/SDS%20Department">SDS Department</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
}
