import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import imageFour from '../../assets/store-img/in-da-club.jpg'
import { Link } from 'react-router-dom';
import { FaPause, FaPlay } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../products.css';
import { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import axios from "axios";


function Products() {
                

    return ( 
        <section className="products">
<Container>
    <Row>

      <Col md={5} className="category mt-3">
      <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic" className='cat-btn'>
        Categories
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <LinkContainer to="/product">
        <Dropdown.Item>Afro</Dropdown.Item>
        </LinkContainer>
        
        <LinkContainer to="/product">
        <Dropdown.Item>Amapiano</Dropdown.Item>
        </LinkContainer>

        <LinkContainer to="/product">
        <Dropdown.Item>RnB</Dropdown.Item>
        </LinkContainer>
      </Dropdown.Menu>
    </Dropdown>
      </Col>

        <Col md={5}>
 <Form className="d-flex mt-3">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> 
        </Col>
    </Row>

    <Row className="g-4 pt-3 pb-3">
      
      <Col lg={3} className='card-container'>

      <img src={imageFour} alt="" className='img-fluid rounded mb-3'/>
                <p className="overlay"><FaPlay /></p>
                <audio src="#"></audio>
                    <p className="title"><Link to="/product">Cool Afro</Link></p>
                     <p className="text">$100</p>

        </Col>

        <Col lg={3} className='card-container'>

      <img src={imageFour} alt="" className='img-fluid rounded mb-3'/>
                <p className="overlay"><FaPlay /></p>
                    <p className="title"><Link to="/product">Cool Afro</Link></p>
                     <p className="text">$100</p>

        </Col>

      
    </Row>
  

</Container>


        </section>
     );
}

export default Products;

