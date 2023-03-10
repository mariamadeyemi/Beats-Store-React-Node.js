const authReducer = (state, action)=>{
    if(action.type === "SETUSER"){
        return {...state, currentUser: action.payload}
    }

    if(action.type === "LOGOUT"){
        return {...state, currentUser: null}
    }

    if(action.type === "USERSESSION"){
        return localStorage.setItem("guestUser", action.payload)
    }
}

export default authReducer;