import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import imageThree from '../../assets/store-img/guitarist-and-pianist.jpg'
import imageFour from '../../assets/store-img/in-da-club.jpg'
import imageSeven from '../../assets/store-img/black-girl-holding-guitar.jpg'
import { Link } from 'react-router-dom';
import { FaPause, FaPlay } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import '../../products.css';
import { useState } from 'react';


function Products() {
                const [play, setPlay] = useState(<FaPlay />)
                const [playState, setPlayState] = useState(false)

                const handleClick = ()=>{
                    setPlayState(!playState)
                    playState ? setPlay(<FaPause />) : setPlay(<FaPlay />)
                }
    return ( 
        <section className="products">
<Container>
    <Row>
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

    <Row xs={1} md={3} className="g-4 pt-3 pb-3">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col className='card-container'>
          <Card>
            <Card.Img variant="top" src={imageFour} className="product-img" />
            <Card.ImgOverlay>
            <p className="overlay" onClick={handleClick}>{play}</p>
            </Card.ImgOverlay>
            <Card.Body className="body">
              <Card.Title className="title">Burna's Type Beat</Card.Title>
              <Card.Text className="text">
                $100.00
              </Card.Text>
              <Button variant='outline-info'>Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  
</Container>


        </section>
     );
}

export default Products;

