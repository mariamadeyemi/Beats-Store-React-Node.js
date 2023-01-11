import Button from "./Button";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


function Footer() {
    return ( 
        <footer>
            <div className="contact">
        <h1 className="footer-logo">beats</h1>
        <ul>
            <li><FaTwitter /></li>
            <li><FaFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaLinkedin /></li>
        </ul>
            </div>

            <div className="links">
            <ul>
            <li>about</li>
            <li>contact</li>
            <li>shop</li>
            <li>blog</li>
        </ul> 
            </div>

            <div className="shop-now">
               <Button text = "Shop Now" /> 
            </div>
        </footer>
     );
}

export default Footer;