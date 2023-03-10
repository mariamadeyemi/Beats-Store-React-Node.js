import { useContext, useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { ProductContext } from "../../context/productContext";
import { FaPause, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";


function Featured({products}) {

  

 
    return ( 
        <section className="featured-products">
          <Container>
            <Row className="align-items-center">
              <Col md={10}>
              <h2 className="featured-text mb-4">Featured</h2>
              </Col>

              {
                products.map((product)=>{
                  
                  const [isPlaying, setIsPlaying] = useState(false)
                  const [song, setSong] = useState(new Audio(`../../../src/uploads/${product.audio}`)) 
                  return  <Col md={3} className="contain" key={product.id}>
                  <img src={`../../../src/uploads/${product.image}`} alt="" className='img-fluid rounded mb-3'/>
                  <p className="play" onClick={()=>{
                    if(isPlaying){
                      song.pause()
                    }else{
                      song.play()
                    }
                    setIsPlaying(!isPlaying)
                  }}>{isPlaying ? <FaPause /> : <FaPlay /> }</p>
                      <p><Link to={`/product/${product.id}`}>{product.name}</Link> </p>
                       <p>{product.price}</p>
                       <Button className="hero-btn mb-3"> Add to Cart</Button>
                       </Col>
                })
              }
            </Row>
          </Container>
          
           
        
        </section>
     );
}

export default Featured;