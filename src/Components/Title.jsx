import { FaPaw } from "react-icons/fa6";

const Title = ({ subHeading, heading, description }) => {
    return (
        <div className="text-center py-14 space-y-4 font-Space_Grotesk  max-w-[720px] mx-auto">
            <div className="flex items-center justify-center">
                <FaPaw className="text-[#FF4880] text-3xl"></FaPaw>
            </div>
            <h3 className="text-[#FF4880] font-semibold text-2xl">{subHeading}</h3>
            <h1 className="font-bold text-6xl">{heading}</h1>
            <p className="text-[#676666] text-xl">{description}</p>
        </div>
    );
};

export default Title;