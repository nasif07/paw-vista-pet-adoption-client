import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const MyAddedPets = () => {

    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();


    const { refetch,data: myPets = [] } = useQuery({
        queryKey: ['allPets', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allPets?email=${user.email}`)
            // const res = await axiosSecure.get(`/allPets`)
            return res.data;
        }
    });
    console.log(myPets);

    // const postData = {
    //     image: data.data.display_url,
    //     category,
    //     name: petName,
    //     location: petLocation,
    //     shortDescription,
    //     longDescription,
    //     date: moment().subtract(10, 'days').calendar(),
    //     age: petAge,
    //     email: user.email,
    //     status: 'false'
    // }

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/allPets/${item._id}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Pet has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    }
   


    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    Serial Number
                                </th>
                                <th>Image</th>
                                <th>Pet Name</th>
                                <th>Pet Category</th>
                                <th>Adoption Status</th>
                                <th>Update</th>
                                <th>Delete</th>
                                <th>Adopt</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myPets.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{item.category}</td>
                                    <td>{item.status}</td>
                                    <td>
                                        <Link to={`/dashboard/updatepet/${item._id}`}>
                                            <button
                                                className="btn btn-ghost bg-[#FF4880] btn-sm">
                                                <FaEdit className="text-white font-bold "></FaEdit>
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteItem(item)} className="btn btn-ghost btn-lg">
                                            <FaTrash className="text-red-600"></FaTrash>
                                        </button>
                                    </td>
                                    <td>
                                        {item?.status ==='false' ? 'not adopted': 'adopted'}
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAddedPets;
