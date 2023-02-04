import imageFour from '../../assets/store-img/in-da-club.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import { FaPause, FaPlay, FaTimes } from 'react-icons/fa';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

function Cart() {
    return ( 
        <section className="cart">
            <Container>

                <Row className='align-items-start'>
                <Col md={7}>
    <h1 className="cart-h1">Cart Review</h1> 

      <div className="cart-desc"> 
         <p>1 item:$100.00 <span><FaTimes /> </span> </p> 
  </div> 

  <div className="items-container">
    <div className="item">
        <p className='item-head'>Item</p>
        <div className="item-des">
<FaPlay className='item-play'/>
        <p>
        <span>Burna type beat</span>
        <span>Track (MP3, WAV, and TRACK STEMS)</span>
        </p>
        </div>
        
    </div>
    <div className="price">
        <p className='price-head'>Price</p>
        <p className='price-amt'>$100.00</p>
    </div>
  </div>
        </Col>  

        <Col md={5}>
            <div className="summary">
                <h2>Cart Summary</h2>
                <div className="cart-summary">
                    <p> <span>Total Gross</span> <span>$100.00</span> </p>
                    <p> <span>Discount</span> <span>-$00.00</span> </p>
                    <p> <span>Total</span> <span>$100.00</span> </p>
                    <Button as={Link} to="/" className='summary-btn'>Checkout with Payoneer</Button>
                </div>
            </div>
        </Col>   
                </Row>


            </Container>

        </section>

        );
}

export default Cart;