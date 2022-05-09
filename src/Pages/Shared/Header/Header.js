import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/Logo/logo.png";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () =>{
    signOut(auth);
  }
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to=" ">
            <img height={30} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to=" ">
                Home
              </Nav.Link>

              
              <Nav.Link as={Link} to="blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="about">
                About
              </Nav.Link>
              
            </Nav>
            <Nav>
              
              { 
                user ? 
                <>
                  <Nav.Link as={Link} to="inventory">
                Manage Inventory
              </Nav.Link>
              <Nav.Link as={Link} to="additem">
                Add Item
              </Nav.Link>
              <Nav.Link as={Link} to="myitem">
                My Item
              </Nav.Link>
              <button className="btn btn-link text-white text-decoration-none" onClick={handleSignOut}>Sign Out</button>
                </>
                
               : 
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
