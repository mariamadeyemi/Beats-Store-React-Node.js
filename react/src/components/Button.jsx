import { FaShoppingBag } from "react-icons/fa";

function Button({text}) {
    return ( 
        <button className="btn"><FaShoppingBag /> {text}</button>
     );
}

export default Button;