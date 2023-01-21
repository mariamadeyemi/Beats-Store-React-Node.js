import { FaBars, FaShoppingCart } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'

function MainNav() {
  return (
    <Navbar expand="lg" sticky="top" className="nav-style">
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand className="logo">BEATS</Navbar.Brand>
        </LinkContainer>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="nav-link">
          <LinkContainer to="/about">
             <Nav.Link>About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/blog-home">
             <Nav.Link>Blog</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/products">
             <Nav.Link>Shop</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact">
             <Nav.Link>Contact</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/cart">
             <Nav.Link><FaShoppingCart /> Cart</Nav.Link>
            </LinkContainer>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;