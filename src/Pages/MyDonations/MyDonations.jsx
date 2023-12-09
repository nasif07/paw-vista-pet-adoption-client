import { useQuery } from "@tanstack/react-query";
import Title from "../../Components/Title";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaDollarSign  } from "react-icons/fa6";
import Swal from "sweetalert2";

const MyDonations = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext)
    const { refetch, data: myDonations = [] } = useQuery({
        queryKey: ['userDonation', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/userDonation?email=${user.email}`)
            // const res = await axiosSecure.get(`/allPets`)
            return res.data;
        }
    });




    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to refund this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Refund it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/userDonation/${item._id}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Refunded!",
                        text: "Your Refund request accepted.",
                        icon: "success"
                    });
                }
            }
        });
    }


    return (
        <div>
            <Title subHeading={"Where I Donated"}></Title>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Serial Number
                            </th>
                            <th>Pet Image</th>
                            <th>Pet Name</th>
                            <th>Donated Amount</th>
                            <th>Ask for refund</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myDonations.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.picture} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.petName}
                                </td>
                                <td>{item.donationAmount}$</td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteItem(item)} className="btn btn-ghost btn-lg">
                                        <FaDollarSign className="text-red-600"></FaDollarSign>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyDonations;