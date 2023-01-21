import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import imageOne from "../../assets/store-img/woman-listening-to-music.jpg"
import imageTwo from "../../assets/store-img/vinyl.jpg"

import { FaPlay, FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";


function Featured() {
    return ( 
        <section className="featured-products">
          <Container>
            <Row className="align-items-center">
              <Col md={10}>
              <h2 className="featured-text mb-4">Featured Products</h2>
              </Col>

              <Col md={3} className="contain">
                <img src={imageOne} alt="" className='img-fluid rounded mb-3'/>
                <Link to="/" className="play"><FaPlay /></Link>
                    <p>Cool Afro</p>
                     <p>$100</p></Col>

              <Col md={3} className="contain">
                <img src={imageOne} alt="" className='img-fluid rounded mb-3'/>
                <Link to="/" className="play"><FaPlay /></Link>
                    <p>Cool Afro</p>
                     <p>$100</p>
                     </Col>

              <Col md={3} className="contain">
                <img src={imageTwo} alt="" className='img-fluid rounded mb-3'/>
                <Link to="/" className="play"><FaPlay /></Link>
                    <p>Cool Afro</p>
                     <p>$100</p>
                     </Col>
              
              <Col md={3} className="contain">
                <img src={imageTwo} alt="" className='img-fluid rounded mb-3'/>
                <Link to="/" className="play"><FaPlay /></Link>
                    <p>Cool Afro</p>
                     <p>$100</p>
                     </Col>
            </Row>
          </Container>
          
           
        
        </section>
     );
}

export default Featured;