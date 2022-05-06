import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/Logo/logo.png'

const Header = () => {
    return (
        <>
  <Navbar collapseOnSelect expand="lg" sticky='top'   bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to=" "><img height={30}  src={logo} alt=""/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to=" ">Home</Nav.Link>
      
      <Nav.Link as={Link} to="inventory">Inventory</Nav.Link>
      <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
      <Nav.Link as={Link} to="contact">Contact</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="about">About</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  

  
</>
    );
};

export default Header;