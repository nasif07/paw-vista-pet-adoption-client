import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/Loading";
import Container from "../../Components/Container";
import Title from "../../Components/Title";
import { Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from "@material-tailwind/react";
import { Button } from "reactstrap";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import ShowDonation from "./ShowDonation";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";


const stripePromise = loadStripe('pk_test_51OImWFA3bVRVpX7EulOo788TQUS3rSFTnfkgbBkEqRONrdH72bj9LMXXjkwDfb2AIoRAeaBo1pq4fDGAM5jZh6oq00hbKssw7g')
const DonationDetails = () => {
    const params = useParams();


    const [activeDonation, setActiveDonation] = useState([]);
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    useEffect(() => {
        axiosPublic.get('/active')
            .then(res => {
                // console.log(res.data);
                setActiveDonation(res.data)

            })
            .catch(error => {
                console.log(error);
            })
    }, [axiosPublic])


    

    // console.log(user);
    

    const { data: donation = [], isLoading } = useQuery({
        queryKey: [`/allDonation/${params.id}`],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allDonation/${params.id}`, {
            });
            return res.data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    // console.log(donation);
    const { _id, picture, petName, donatedAmount, shortDescription, longDescription, maximumDonation, createDate, petCategory } = donation;



    






    return (
        <Container>
            <div className="pt-8">
                <Title heading={"Donation Details"}></Title>
            </div>
            <div className="card bg-base-200 p-12 md:max-w-3xl lg:max-w-5xl mx-auto">
                <div className="flex justify-between">
                    <h2 className="text-3xl pb-4 font-extrabold text-[#FF4880]">Category: <span className="text-black">{petCategory}</span></h2>
                    <h2 className="text-3xl pb-4 font-extrabold text-[#FF4880]">Name: <span className="text-black">{petName}</span></h2>
                </div>
                <img src={picture} className="w-[900px] h-[550px]" alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">About {petName}</h2>
                    <p className="text-[#676666] text-2xl">{longDescription}</p>
                    <div className="divider"></div>

                    <div className="flex justify-between">
                        <div className="flex">
                            <p className="text-black font-semibold text-2xl pb-1">Max Donation:</p>
                            <p className="text-xl font-semibold ml-3">{maximumDonation}$</p>
                        </div>
                        <div className="flex">
                            <p className="text-black font-semibold text-2xl pb-1">Donated Amount:</p>
                            <p className="text-xl font-semibold ml-3">{donatedAmount}$</p>
                        </div>
                    </div>
                    <progress className="progress mt-5" value={donatedAmount} max={maximumDonation}></progress>
                    <Button className="mt-8 bg-[#3B3B3B] text-white" onClick={handleOpen} variant="gradient">
                        Donate Now
                    </Button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>
                            <h1 className="text-center text-3xl">Please enter your donete amount and fullfill the bank process</h1>
                        </DialogHeader>
                        <DialogBody>
                            <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
                                Fill th input field and then click submit.
                            </Typography>
                            <div className="grid gap-6">
                                <Elements stripe={stripePromise}>
                                    <CheckOutForm></CheckOutForm>
                                </Elements>
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


            <h1 className="text-5xl font-bold pt-12 text-center p-6">More Active Donation</h1>




            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-16">
                {
                    activeDonation.map(singleDonation => <ShowDonation key={singleDonation._id} singleDonation={singleDonation}></ShowDonation>)
                }
            </div>
        </Container>
    );
};

export default DonationDetails;

// axiosPublic.post('/allDonars', donatorInfo)
// .then(function (response) {
//     console.log(response);
//     if (response.data.insertedId) {
//         Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: `Thanks for Donation us ${user?.displayName}`,
//             showConfirmButton: false,
//             timer: 1500
//         });
//     }
// })