import { Outlet } from "react-router-dom";
import MainNav from "../components/home_component/Nav";
import Footer from "../components/home_component/Footer";


function Layout() {
    return ( 
        <>
        <MainNav />
        <Outlet />
        <Footer />
        </>
     );
}

export default Layout;