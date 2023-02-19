const reducer = (state, action) =>{
    if(action.type === "FILL_CART"){
        let tempcart = state.cart;
        tempcart.push(action.payload.product)
        return {...state, cart: tempcart} 
    }

}

export default reducer;