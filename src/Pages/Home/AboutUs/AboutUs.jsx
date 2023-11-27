import Container from "../../../Components/Container";
import PrimaryButton from "../../../Components/PrimaryButton";
import Title from "../../../Components/Title";
import aboutUsImg from "../../../assets/aboutUs.jpg"
import { MdOutlineVerified } from "react-icons/md";

const AboutUs = () => {
    return (
        <Container>
            <Title heading={"About Us"} subHeading={"Connecting Hearts, One Paw at a Time"}></Title>
            <div>
                <div className="hero p-0">
                    <div className="hero-content p-0 flex-col gap-20 lg:flex-row">
                        <img src={aboutUsImg} className="lg:w-full md:w-[550px] rounded-full shadow-2xl" />
                        <div className="space-y-6 w-full">
                            <h1 className="text-5xl pb-4 font-bold">WE ARE BEST FOR YOUR PET CARE</h1>
                            <p className="text-[#676666] text-xl">Welcome to Paw Vista where compassion meets companionship. At Our Pet Haven, we believe in the transformative power of pet adoption, not just for the animals we rescue but also for the humans who open their hearts and homes to them.</p>
                            <div className="pb-4">
                                <div className="flex items-center gap-4">
                                    <MdOutlineVerified className="text-xl text-[#FF4880]"></MdOutlineVerified>
                                    <p className="text-xl text-[#676666]">Behavioral Consultation & Counseling</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MdOutlineVerified className="text-xl text-[#FF4880]"></MdOutlineVerified>
                                    <p className="text-xl text-[#676666]">Specialized Day Habilitation</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MdOutlineVerified className="text-xl text-[#FF4880]"></MdOutlineVerified>
                                    <p className="text-xl text-[#676666]">Chicken Dog Treats Pet Supply Pet Food</p>
                                </div>
                            </div>
                            <PrimaryButton>Watch Video</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AboutUs;