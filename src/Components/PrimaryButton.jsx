
import { FaPaw } from "react-icons/fa6";

const PrimaryButton = ({children}) => {
    return (
        <div className="btn btn-ghost border-0 border-b-4 border-l-2 border-[#FF4880] text-lg font-Space_Grotesk">
            <FaPaw className="text-[#FF4880]"></FaPaw>
            {children}
        </div>
    );
};

export default PrimaryButton;