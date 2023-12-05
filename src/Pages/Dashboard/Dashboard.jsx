import { FaEnvelope, FaHorse, FaUser } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../../Shared/NavBar";
import { IoIosAddCircleOutline } from "react-icons/io";
import useAdmin from "../../Hook/useAdmin";
import { FaDonate } from "react-icons/fa";
// import useAdmin from "../../Hook/useAdmin";


const Dashboard = () => {
    // const [isAdmin] = useAdmin();
    const [isAdmin] = useAdmin();
    // console.log(isAdmin);
    console.log(isAdmin);
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
                            <NavLink to={"/dashboard/myAddedPets"}><FaHorse></FaHorse>My Added Pets</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/dashboard/createDonation"}><FaDonate></FaDonate>Create Donation</NavLink>
                        </li>
                        

                        {
                            isAdmin ?<> 
                            <div className="divider">Admin Routes</div>
                            <li>
                                <NavLink to={"/dashboard/allusers"}><FaUser></FaUser>All Users</NavLink>
                            </li> 
                            <li>
                                <NavLink to={"/dashboard/adminAllPets"}><FaHorse></FaHorse>All Pets</NavLink>
                            </li> 

                            </>: ''
                        }
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