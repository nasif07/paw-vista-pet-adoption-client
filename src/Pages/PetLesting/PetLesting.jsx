// import { useLoaderData } from "react-router-dom";
import Container from "../../Components/Container";
import Title from "../../Components/Title";
import PrimaryButton from "../../Components/PrimaryButton";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading";

const PetLesting = () => {

    // const allPets = useLoaderData();
    // console.log(allPets);

    const axiosPublic = useAxiosPublic()


    const { data: allPets = [], isLoading } = useQuery({
        queryKey: ['allPets'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allPets', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            return res.data
           
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }
    // refetch()
    return (
        <Container>
            <div className="pt-12">
                <Title heading={"Pets Waiting for Adoption"} subHeading={"Meet the animals"}></Title>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    allPets.map(pet => <><div key={pet.name} className="card rounded-md border">
                        <div className="pt-3 pl-2">
                            <span className="text-xl p-1 font-medium bg-[#FF4880] rounded-md text-white">{pet.date}</span>
                        </div>
                        <figure className="px-10 pt-10">
                            <img className="rounded-full w-[350px] h-[350px]" src={pet.image} />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p className="text-[#696868] text-xl font-medium">Age: {pet.age} Year</p>
                            <h2 className="font-bold text-4xl">Name: {pet.name}</h2>
                            <p className="text-[#696868] text-xl font-medium">Location: {pet.location}</p>
                            <p className="text-[#696868] text-xl font-medium pb-3">{pet.shortDescription}</p>
                            <div className="card-actions">
                                <Link to={`/pet/${pet._id}`}><PrimaryButton>See Details</PrimaryButton></Link>
                            </div>
                        </div>
                    </div></>)
                }
            </div>
        </Container>
    );
};

export default PetLesting;