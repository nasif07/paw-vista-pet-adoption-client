import {  FaEnvelope, FaHorse } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../../Shared/NavBar";
import { IoIosAddCircleOutline } from "react-icons/io";


const Dashboard = () => {
    return (
        <>
        <NavBar></NavBar>
            <div className='flex md:pt-16 lg:pt-[75px]'>
                <div className="w-64 min-h-screen bg-[#FF4880]">
                    <ul className="menu p-4 text-white text-lg">
                       
                        <li>
                            <NavLink to={"/dashboard/addapet"}><IoIosAddCircleOutline></IoIosAddCircleOutline>Add a Pet</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/order/salad"}><FaHorse></FaHorse>Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/order/salad"}><FaEnvelope></FaEnvelope>Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Dashboard;