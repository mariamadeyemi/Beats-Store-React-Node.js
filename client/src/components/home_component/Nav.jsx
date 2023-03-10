import { FaBars, FaShoppingCart } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import logo from "../../assets/logo-1.png" 
import { useContext } from "react";
import { ProductContext } from "../../context/productContext";

function MainNav() {
  const {state} = useContext(ProductContext)
  const {cart} = state
  return (
    <Navbar expand="lg" sticky="top" className="nav-style">
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand className="logo"><img src={logo} alt="logo" className="img-fluid logo-img"/>BeatsHill </Navbar.Brand>
        </LinkContainer>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-btn" />
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

            <LinkContainer to="/sign-up">
             <Nav.Link>Sign Up</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/cart">
             <Nav.Link><FaShoppingCart /> Cart 
             {cart.cartItems.length > 0 && (<span>{cart.cartItems.length}</span>)}
             </Nav.Link>
            </LinkContainer>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;