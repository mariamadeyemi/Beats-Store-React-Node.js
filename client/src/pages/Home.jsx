import Featured from "../components/home_component/Featured";
import Hero from "../components/home_component/Hero";
import Newsletter from "../components/home_component/Newsletter";
import { useContext, useEffect } from "react";
import { ProductContext } from "../context/productContext";


function Home() {
    const {products, getProducts} = useContext(ProductContext)
    useEffect(()=>{
    const fetchData = async()=>{
       await getProducts();
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