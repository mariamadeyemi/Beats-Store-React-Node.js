import { useContext, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/productContext";
import Button from "react-bootstrap/esm/Button";


function SingleProduct({id, image, name, price, audio}) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [song, setSong] = useState(new Audio(`../../../src/uploads/${audio}`)) 
    const { getProduct } = useContext(ProductContext)
    return ( 
        <Col md={3} className="contain">
                <img src={`../../../src/uploads/${image}`} alt="" className='img-fluid rounded mb-3'/>
                <p className="play" onClick={()=>{
                  if(isPlaying){
                    song.pause()
                  }else{
                    song.play()
                  }
                  setIsPlaying(!isPlaying)
                }}>{isPlaying ? <FaPause /> : <FaPlay /> }</p>
                    <p><Link to={`/product/${id}`}>{name}</Link> </p>
                     <p>{price}</p>
                     <Button className="hero-btn mb-3" onClick={async()=> {
   await getProduct(id)}}> Add to Cart</Button>
                     </Col>
     );
}

export default SingleProduct;