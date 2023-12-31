import { useContext, useState } from "react";
import { IoPawSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { AiOutlineMenu } from 'react-icons/ai'
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false)

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
                    ''
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
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52">
                            {navLinks}
                            {
                                user ?
                                    <>
                                        <li>
                                            <NavLink to="/dashboard" className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-[#FF4880]" : ""}>
                                                Dashboard
                                            </NavLink>
                                        </li>
                                        <button onClick={handleLogOut} className="btn">Log Out</button></>
                                    :
                                    <Link to="/login">
                                        <button className="btn">Login</button></Link>
                            }
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
                {user && <div
                    onClick={() => setIsOpen(!isOpen)}
                    className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 gap-3 rounded-full  hover:shadow-md transition md:hidden lg:flex'
                >
                    <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
                    <div className='hidden md:block'>
                        {/* Avatar */}
                        <img
                            className='rounded-full'
                            referrerPolicy='no-referrer'
                            src={user && user.photoURL ? user.photoURL : ''}
                            alt='profile'
                            height='40'
                            width='40'
                        />
                    </div>
                </div>}
                {(isOpen && user) && (
                    <div className='absolute rounded-xl shadow-md w-[50vw] md:w-[10vw] bg-white overflow-hidden lg:right-14 right-0 top-20 text-sm text-black'>
                        <div className='flex flex-col cursor-pointer'>
                            <Link
                                to='/'
                                className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                                Home
                            </Link>
                            <button className="btn">
                                <Link
                                    to='/dashboard'
                                    className=' py-3 hover:bg-neutral-100 transition font-semibold'
                                >
                                    Dashboard
                                </Link>
                            </button>

                            <button onClick={handleLogOut} className="btn w-full "><Link
                                to='/'
                                className=' py-4 transition font-semibold'
                            >
                                Log Out
                            </Link></button>

                        </div>
                    </div>
                )}
            </div>
        </div >
    );
};

export default NavBar;