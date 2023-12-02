import Lottie from "lottie-react";
import animation from "../assets/loading.json"
const Loading = () => {
    return (
        <div className="flex h-screen justify-center items-center">
            <Lottie animationData={animation}></Lottie>
        </div>
    );
};

export default Loading;