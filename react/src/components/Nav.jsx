import { FaBars, FaShoppingCart } from "react-icons/fa";
import { BrowserRouter, Route, Link } from "react-router-dom";
function Navbar() {

    return ( 
        <nav>
        <h1>beats</h1>
        <div className="nav-links">
            <ul>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/blog-home">blog</Link></li>
                <li><Link to="/products">shop</Link></li>
                <li><Link to="/contact">contact</Link></li>
                <li><Link to="/cart"><FaShoppingCart /> cart</Link></li>
            </ul>
            
            </div> 
            <button className="burger-menu"><FaBars /></button>  
        </nav>
     );
}

export default Navbar;