import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useHistory } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

export default function Header() {
  const history = useHistory()

  const logOut = () => {
    history.push("/")
  }
  return (
    <Navbar collapseOnSelect
      bg="info"
      variant="dark"
      expand="md"
      className="static-top"
    >
      <Navbar.Brand>
        <img src={logo} alt="logo" width="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" >
          <LinkContainer to="/dashboard">
            <Nav.Link >Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Tickets">
            <Nav.Link >Tickets</Nav.Link>
          </LinkContainer>
          <Nav.Link onClick={logOut}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
