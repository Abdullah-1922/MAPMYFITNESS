import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navber/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

const Root = () => {
    return (
        <div className="flex  flex-col min-h-screen">
            <Navbar></Navbar>
            <div className="flex-grow   w-full mx-auto"><Outlet></Outlet></div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;