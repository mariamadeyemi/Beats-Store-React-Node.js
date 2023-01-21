import illu from "../../assets/Music_Outline.svg"
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/esm/Container";
import { LinkContainer } from "react-router-bootstrap";
import Button from 'react-bootstrap/Button';
import { FaShoppingBag } from "react-icons/fa";


function Hero() {
    return ( 
        <section className="hero-section mt-3">
            <Container>
        <Row className="align-items-center">
        <Col md={6}>
        <h1 className="hero-h1 mb-3">
        your number one music beat store
        </h1>
        <p className="hero-p mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat iure et mollitia dolores adipisci nobis, commodi itaque. Amet est nam sunt explicabo deleniti dolorem iste.</p>
        
        <Button as={Link} to="/products" className="hero-btn"><FaShoppingBag /> Shop Now</Button>{' '}
        </Col> 

        <Col md={6}>
        <img src={illu} alt="illustration" className="hero-illu img-fluid" />
        </Col>   
        </Row>

            </Container>
                {/* <Row className = "align-items-center">
          <Col>  
          <div className="hero-text">
            <h2>
                your number one music beat store
            </h2>
            <p className="hero-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat iure et mollitia dolores adipisci nobis, commodi itaque. Amet est nam sunt explicabo deleniti dolorem iste.</p>
    <Link to="/products"><Button text = "Shop Now"/></Link>        
            </div>
            </Col>

            <Col> 
            <div className="hero-illu">
                <img src={illu} alt="illustration" className="hero-illu img-fluid" />
            </div>
            </Col> 
        </Row> */}
        </section>
     );
}

export default Hero;
