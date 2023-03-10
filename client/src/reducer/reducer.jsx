const reducer = (state, action) =>{
    // if(action.type === "FILL_CART"){
    //     // let tempcart = state.cart;
    //     // tempcart.push(action.payload.product)
    //     return {...state, product: action.payload.product } 
    // }


    if(action.type === "CART_ADD_ITEM"){
        return {...state, cart: [...state.cart.cartItems, action.payload]}
    }

    if(action.type === "FETCH_SUCCESS"){
        return {...state, productData: action.payload}
    }


}

export default reducer;