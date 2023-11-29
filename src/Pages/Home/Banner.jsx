import PrimaryButton from "../../Components/PrimaryButton";
import bannerImg from "../../assets/banner3.jpg"
const Banner = () => {
    return (
        <div className="hero min-h-[100vh] font-Space_Grotesk" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="hero-overlay bg-opacity-50 "></div>
            <div className="hero-content text-center text-white">
                <div className="lg:max-w-[850px] md:max-w-[600px]">
                    <h1 className="mb-5 text-7xl font-bold">Find Your Furry Friend</h1>
                    <p className="mb-5 text-xl">Welcome to PawVista, where hearts and paws connect. Explore our gallery of lovable companions waiting for their forever homes. Each pet has a unique story, and you have the power to change it. Adopt today and experience the joy of unconditional love. Your new best friend is just a click away!</p>
                    <PrimaryButton>click me</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;