import { FaBars, FaShoppingCart } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import logo from "../../assets/logo-1.png" 
import { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

function MainNav() {
  const navigate = useNavigate()
  const {currentUser, logout} = useContext(AuthContext)
  const {state} = useContext(ProductContext)
  const {cart} = state

  const deleteUser = async()=>{
    await logout()
    navigate("/")
  }
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

            {currentUser && <Nav.Link> {currentUser.first_name} </Nav.Link>}

           {currentUser ? <Nav.Link onClick={deleteUser}>Logout</Nav.Link> :  <LinkContainer to="/login">
             <Nav.Link>Login</Nav.Link>
            </LinkContainer>} 

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