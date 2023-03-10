import { Outlet } from "react-router-dom";
import MainNav from "../components/home_component/Nav";
import Footer from "../components/home_component/Footer";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";


function Layout() {
//     const { userSession } = useContext(AuthContext);
//      useEffect(()=>{
//         const fetch = async ()=>{
//            await userSession();
//         }
//         fetch();
//   }, [])

//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(currentUser));
//   }, [currentUser]);

    return ( 
        <>
        <MainNav />
        <Outlet />
        <Footer />
        </>
     );
}

export default Layout;