import Featured from "../components/home_component/Featured";
import Hero from "../components/home_component/Hero";
import Newsletter from "../components/home_component/Newsletter";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
// import { ProductContext } from "../context/productContext";


function Home() {
   //  const {products, getProducts} = useContext(ProductContext)
    const [products, setProducts] = useState([])

    useEffect(()=>{
    const fetchData = async()=>{
      const res = await axios.get("/api/products")
      setProducts(res.data);
    } 
    fetchData()      
    }, [])
    return ( 
        <>
        <Hero />
        <Featured products={products} />
        <Newsletter />
        </>
     );
}

export default Home;