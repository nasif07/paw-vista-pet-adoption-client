import { useParams } from "react-router-dom";
import Container from "../../../Components/Container";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Title from "../../../Components/Title";
import Loading from "../../../Components/Loading";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";


const PetDetails = () => {
    const {user } = useContext(AuthContext);
    // console.log(user);
    const param = useParams();
    const axiosPublic = useAxiosPublic()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const axiosSecure = useAxiosSecure();
    const handleAdopt = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const number = e.target.number.value;
        const address = e.target.address.value;
        // console.log(name, email, number, address);
        const userDetails = {
            name, email, number, address
        }
        if(user && user.email) {
            axiosSecure.post('/adoptionRequest', userDetails)
            .then(res => {
                // console.log(res.data);
                if(res.data.insertedId){
                    // do something
                    Swal.fire({
                        icon: "success",
                        title: `${name} Your adoption Request sent successfull`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        }
        else{
            Swal.fire("Please Login first");
        }
    }
    const { data: pet = [], isLoading } = useQuery({
        queryKey: ['pet'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allPets/${param.id}`, {
            });
            return res.data
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <Container>
            <div className="pt-6">
                <Title subHeading={"Home | Pet-single"} heading={"Pet details"}></Title>
            </div>
            <div className="card bg-base-200 p-12 md:max-w-3xl lg:max-w-5xl mx-auto">
                <div className="flex justify-between">
                    <h2 className="text-3xl pb-4 font-extrabold text-[#FF4880]">Category: <span className="text-black">{pet.category}</span></h2>
                    <h2 className="text-3xl pb-4 font-extrabold text-[#FF4880]">Name: <span className="text-black">{pet.name}</span></h2>
                </div>
                <img src={pet.image} className="w-[900px] h-[550px]" alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">About Bio</h2>
                    <p className="text-[#676666] text-2xl">{pet.longDescription}</p>
                    <div className="divider"></div>

                    <div className="grid grid-cols-2 md:grid-cols-3">
                        <div>
                            <p className="text-black font-semibold text-xl pb-1">Age: </p>
                            <p className="text-xl">{pet.age} Year</p>
                        </div>
                        <div>
                            <p className="text-black font-semibold text-xl pb-1">Location: </p>
                            <p className="text-xl">{pet.location}</p>
                        </div>
                        <div>
                            <p className="text-black font-semibold text-xl pb-1">Lesting Date: </p>
                            <p className="text-xl">{pet.date}</p>
                        </div>
                    </div>
                    <Button className="mt-8" onClick={handleOpen} variant="gradient">
                        Adopt
                    </Button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>
                            <h1 className="text-center text-3xl">Detailes for Adoption</h1>
                        </DialogHeader>
                        <DialogBody>
                            <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
                                Fill th input field and then click submit.
                            </Typography>
                            <div className="grid gap-6">
                                <form onSubmit={handleAdopt}>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">User Name</span>
                                        </div>
                                        <input name="name" defaultValue={user?.displayName} disabled type="text" placeholder="Type here" className="input input-bordered w-full" />
                                    </label>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">User Email</span>
                                        </div>
                                        <input name="email" defaultValue={user?.email} disabled type="text" placeholder="Type here" className="input input-bordered w-full" />
                                    </label>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Phone Number*</span>
                                        </div>
                                        <input required name="number" type="number" placeholder="Type here" className="input input-bordered w-full" />
                                    </label>

                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Address*</span>
                                        </div>
                                        <input required name="address" type="text" placeholder="Type here" className="input input-bordered w-full" />
                                    </label>
                                    <button onClick={handleOpen} className="btn btn-outline mt-6">Submit</button>
                                </form>
                            </div>
                        </DialogBody>
                        <DialogFooter className="space-x-2">
                            <Button variant="text" color="gray" onClick={handleOpen}>
                                cancel
                            </Button>
                        </DialogFooter>
                    </Dialog>
                </div>
            </div>
        </Container>
    );
};

export default PetDetails;