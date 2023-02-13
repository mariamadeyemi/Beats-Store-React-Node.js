import { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import Col from "react-bootstrap/esm/Col";


function SingleProduct({id, image, desc, price, song}) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [audio, setAudio] = useState(new Audio(song)) 
    return ( 
        <Col md={3} className="contain">
                <img src={image} alt="" className='img-fluid rounded mb-3'/>
                <p className="play" onClick={()=>{
                  if(isPlaying){
                    audio.pause()
                  }else{
                    audio.play()
                  }
                  setIsPlaying(!isPlaying)
                }}>{isPlaying ? <FaPause /> : <FaPlay /> }</p>
                    <p>{desc}</p>
                     <p>{price}</p></Col>
     );
}

export default SingleProduct;