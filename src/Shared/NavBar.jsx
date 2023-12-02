import { useContext } from "react";
import { IoPawSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
const NavBar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
    }

    const navLinks = <>
        <li>
            <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF4880]" : ""}>
                    Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/petLesting" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF4880]" : ""}>
                    Pet Lesting
            </NavLink>
        </li>
        <li>
            <NavLink to="/donationcampaign" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF4880]" : ""}>Donation Campaigns
            </NavLink>
        </li>
        <li>
            {/* <NavLink to="/login" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF4880]" : ""}>
                    Login
            </NavLink> */}

{
                            user ?
                                <button onClick={handleLogOut} className="btn ml-4">Log out</button>
                                :
                                <Link to="/login">
                                    <button className="btn">Login</button></Link>
                        }
        </li>
    </>
    return (
            <div className="font-Space_Grotesk">
                <div className="navbar text-white fixed z-10 bg-black bg-opacity-20 lg:px-24">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                            </ul>
                        </div>
                        <div className="flex justify-center items-center">
                            <IoPawSharp className="text-4xl"></IoPawSharp>
                            <a className="btn btn-ghost text-3xl font-bold"><span className="text-[#FF4880]">Paw</span>Vista</a>
                        </div>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-xl font-bold space-x-4">
                           {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end lg:hidden">
                        <a className="btn font-primary">Login</a>
                    </div>
                </div>
            </div>
    );
};

export default NavBar;