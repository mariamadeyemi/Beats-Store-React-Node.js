import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";

const AuthContext = createContext();

// const initialState = {
//     currentUser: JSON.parse(localStorage.getItem("user")) || null
// }

const AuthContextProvider = ({ children }) => {
    // const [state, dispatch] = useReducer(authReducer, initialState)

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post("/api/login", inputs);
    // dispatch({ type: "SETUSER", payload: res.data })
    setCurrentUser(res.data);
  };

  const logout = async (inputs) => {
    await axios.post("/api/logout");
    // dispatch({ type: "LOGOUT" })
    setCurrentUser(null);
  };
  
//   useEffect(()=>{
//     const fetch = async ()=>{
//       let res = await axios.post("/api/shopping-sess")
//       //  dispatch({type: "USERSESSION", payload: res.data })
//         localStorage.setItem("guestUser", res.data)
//     }
//     fetch();
// }, [])

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useGlobalContext = () => {
    return useContext(AuthContext)
  }

export {AuthContext, AuthContextProvider}

