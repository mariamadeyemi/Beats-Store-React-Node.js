import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaShoppingBag } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


function Footer() {
    return ( 
        <footer>
            <Container fluid>
            <Row className="align-items-center justify-content-centent">
                <Col md={4}>
        <h2 className="footer-logo mx-4 mb-3">Beats</h2>
        <ul className="socio-icons">
            <li><FaTwitter /></li>
            <li><FaFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaLinkedin /></li>
        </ul>        
                </Col>

                <Col md={4}>
                <ul className="links ">
            <li>about</li>
            <li>contact</li>
            <li>shop</li>
            <li>blog</li>
        </ul> 
                </Col>

                <Col md={4} className="text-center">
                <Button as={Link} to="/products" className="hero-btn"><FaShoppingBag /> Shop Now</Button>{' '}
                </Col>
            </Row>
            </Container>

            {/* <div className="contact">
        <h1 className="footer-logo">beats</h1>
        <ul>
            <li><FaTwitter /></li>
            <li><FaFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaLinkedin /></li>
        </ul>
            </div>

            <div className="links">
            <ul>
            <li>about</li>
            <li>contact</li>
            <li>shop</li>
            <li>blog</li>
        </ul> 
            </div>

            <div className="shop-now">
               <Button text = "Shop Now" /> 
            </div> */}
        </footer>
     );
}

export default Footer;