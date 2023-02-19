import axios from 'axios'
import { createContext, useReducer, useState } from 'react'
import reducer from "../reducer/reducer"
const ProductContext = createContext();

const initialState = {
    cart: [],
    total: 0,
    amount: 0
}

const ProductContextProvider =  ({children})=>{
    const [products, setProducts] = useState([])
    const [state, dispatch] = useReducer(reducer, initialState)
    

 
  const getProducts = async()=>{
    const res = await axios.get("/api/products")
      setProducts(res.data);
  } 
  
  const getProduct = async(id)=>{
   const response = await axios.get(`/api/product/${id}`)
   const product = response.data 
   dispatch({type: "FILL_CART", payload: {id, product}})
  } 

  return (
    <ProductContext.Provider value={{...state, products, getProducts, getProduct}}>
        {children}
    </ProductContext.Provider>
  )
}

export {ProductContext, ProductContextProvider}