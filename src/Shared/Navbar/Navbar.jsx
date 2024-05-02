import { Link } from "react-router-dom";
import logo from "../../../public/logo.png"
import { FaListUl } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-10 bg-base-100 md:px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <FaListUl className="text-3xl text-white "></FaListUl>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-3">
                            <li><Link>Home</Link></li>
                            <li><Link>CATEGORIES</Link></li>
                            <li><Link>NOSE PIN</Link></li>
                            <li><Link>ADD REVIEWS</Link></li>
                            <li><Link>CONTACT US</Link></li>
                           
                            
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <img className="w-[100px] md:w-[200px]" src={logo} alt="" />
                </div>
                <div className="navbar-end">
                    <button className="btn  md:px-10">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;