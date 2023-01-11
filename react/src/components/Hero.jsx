import Button from "./Button";
import illu from "../assets/Music_Outline.svg"
import { BrowserRouter, Route, Link } from "react-router-dom";
 

function Hero() {
    return ( 
        <section className="hero">
            <div className="hero-text">
            <h2>
                your number one music beat store
            </h2>
            <p className="hero-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat iure et mollitia dolores adipisci nobis, commodi itaque. Amet est nam sunt explicabo deleniti dolorem iste.</p>
    <Link to="/products"><Button text = "Shop Now"/></Link>        
            </div>
            <div className="hero-illu">
                <img src={illu} alt="illustration" className="hero-illu" />
            </div>
            
        </section>
     );
}

export default Hero;
