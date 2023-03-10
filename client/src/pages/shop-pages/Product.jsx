import { useContext, useEffect, useReducer, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import { useLocation } from "react-router-dom";
import Row from "react-bootstrap/esm/Row";
import axios from "axios"
import { ProductContext } from "../../context/productContext";
import reducer from "../../reducer/reducer";

function Product() {
    // const [product, setProduct] = useState({})
    const location = useLocation();
    const [{productData,loading}, dispatch] = useReducer(reducer, {
        productData: [],
        loading: false
    })

    const productId = location.pathname.split("/")[2]

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
           const res = await axios.get(`/api/product/${productId}`);
           dispatch({type: 'FETCH_SUCCESS', payload: res.data})
                // setProduct(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [productId])

    const {state, dispatch: ctxDispatch} = useContext(ProductContext)
    const { cart } = state

    const addToCart = ()=>{
     const existItem = cart.cartItems.find((item)=>item.id === productData.id)
     if(existItem){
        window.alert("Item already exists")
        return;
     }
    ctxDispatch({
        type: "CART_ADD_ITEM",
        payload: {...productData, quantity: 1}
      })  
}

    return ( 
        <section className="product mt-3 mb-3">
            <Container>
                <Row>
                    <Col md={10} className="text-center">
                    <img src={`../../../src/uploads/${productData.image}`} alt="img" className="prod-img mb-3" />
                    <div className="beat-tit">
<p>  
 {productData.name}</p>
 <p>File type: {productData.audio_type}</p>
  <Button className="prod-button hero-btn" onClick={addToCart}>Add to Cart</Button>                          </div>
                 
                    </Col>
    
                </Row>
            </Container>
        </section>
        );
}

export default Product;