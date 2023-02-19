import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import { useLocation } from "react-router-dom";
import Row from "react-bootstrap/esm/Row";
import axios from "axios"

function Product() {
    const [product, setProduct] = useState({})
    const location = useLocation();

    const productId = location.pathname.split("/")[2]

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
           const res = await axios.get(`/api/product/${productId}`);
                setProduct(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [productId])

    return ( 
        <section className="product mt-3 mb-3">
            <Container>
                <Row>
                    <Col md={10} className="text-center">
                    <img src={`../../../src/uploads/${product.image}`} alt="img" className="prod-img mb-3" />
                    <div className="beat-tit">
<p>  
 {product.name}</p>
 <p>File type: {product.audio_type}</p>
  <Button className="prod-button hero-btn">Add to Cart</Button>                          </div>
                 
                    </Col>
    
                </Row>
            </Container>
        </section>
        );
}

export default Product;