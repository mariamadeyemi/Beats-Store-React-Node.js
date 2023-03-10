import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import { FaPause, FaPlay, FaTimes } from 'react-icons/fa';
import Button from 'react-bootstrap/esm/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../../context/productContext';

function Cart() {
    const navigate = useNavigate()
    const {state, dispatch} = useContext(ProductContext)
    const {cart} = state

    const removeItem = (item)=>{
        dispatch({type: 'CART_REMOVE_ITEM', payload: item});
    }

    const checkoutHandler = () => {
        navigate("/login?redirect=/shipping")
    }

    return ( 
        <section className="cart">
            <Container>

                <Row className='align-items-start'>
                    
                <Col md={7}>
    <h1 className="cart-h1">Cart Review</h1> 

      <div className="cart-desc"> 
         <p>{cart.cartItems.length} items:${cart.cartItems.reduce((a, c)=> a + c.price * c.quantity, 0)} <span><FaTimes /> </span> </p> 
  </div> 

  <div className="items-container">
    <div className="item">
        <p className="item-head">Item</p>
        <p className="price-head">Price</p>
    </div>
    {cart.cartItems.map((item)=>{
        return  <div className="description" key={item.id}>
        <div className="item-des">
     <FaPlay className='item-play'/>
     <p>
     <span>{item.name}</span>
      <span>{item.audio_type}</span>    
     </p>
    </div>  
    <div className="price-desc">
    <p className='price-amt'>{item.price}</p> <span onClick={()=>{
        removeItem(item)
    }}><FaTimes /> </span>
    
      </div> 
      </div>   

                     })} 

  </div>

  

  
        </Col>  

        <Col md={5}>
            <div className="summary">
                <h2>Cart Summary</h2>
                <div className="cart-summary">
                    <p> <span>Total Gross</span> <span>${cart.cartItems.reduce((a, c)=> a + c.price * c.quantity, 0)}</span> </p>
                    <p> <span>Discount</span> <span>-$00.00</span> </p>
                    <p> <span>Total</span> <span>${cart.cartItems.reduce((a, c)=> a + c.price * c.quantity, 0)}</span> </p>
                    <Button type='button' onClick={checkoutHandler} disabled={cart.cartItems.length === 0} className='summary-btn'>Checkout with Payoneer</Button>
                </div>
            </div>
        </Col>   
                </Row>


            </Container>

        </section>

        );
}

export default Cart;