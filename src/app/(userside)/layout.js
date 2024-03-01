
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Navbar from "@/Components/Navbar/Navbar";



const UserSideLayout = ({ children }) => {
    return (
        <div>
            <div className="hidden lg:block"><Header></Header></div>
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UserSideLayout;