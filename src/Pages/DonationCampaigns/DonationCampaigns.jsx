
import Title from "../../Components/Title";
import Loading from "../../Components/Loading";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import Container from "../../Components/Container";
import ShowDonation from "./ShowDonation";

const DonationCampaigns = () => {
    const axiosPublic = useAxiosPublic()

    const { data: donationItem = [], isLoading } = useQuery({
        queryKey: ['allDonation'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allDonation`, {
            });
            return res.data
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    // console.log(donationItem);
    console.log(donationItem);

    return (
        <Container>
            <div className="lg:pt-16 pt-10">
                <Title heading={"Campaigns"} subHeading={"Support our mission to find loving homes for pets in need."}></Title>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    donationItem.map(singleDonation => <ShowDonation key={singleDonation._id} singleDonation={singleDonation}></ShowDonation>)
                }
            </div>
        </Container>
    );
};

export default DonationCampaigns;