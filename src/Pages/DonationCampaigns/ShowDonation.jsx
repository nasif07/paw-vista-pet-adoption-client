import { Link } from "react-router-dom";
import PrimaryButton from "../../Components/PrimaryButton";

const ShowDonation = ({ singleDonation }) => {
    // console.log(singleDonation);
    const { _id, picture, petName, donatedAmount, shortDescription, maximumDonation, createDate, petCetagory } = singleDonation;
    return (
        <div className="card rounded-md border mt-3">
            <div className="-mb-12 z-10 ml-3">
                <h1 className="text-2xl font-bold"><span className="text-xl p-1 font-medium bg-[#FF4880] rounded-md text-white">{createDate}</span></h1>
            </div>
            <figure className="">
                <img className="h-[350px] w-full" src={picture} />
            </figure>
            <div className="card-body">
                <h2 className="font-bold text-4xl pb-2"><span className="text-[#FF4880]">Name: </span>{petName}</h2>
                <p className="text-[#696868] text-xl font-medium pb-3">{shortDescription}</p>
                <div className="flex flex-col gap-2">
                    <div>
                        <p className="text-black font-semibold text-2xl pb-1">Meximum Amount: <span className="text-[#696868]">{maximumDonation}$</span></p>
                    </div>
                    <div>
                        <p className="text-black font-semibold text-2xl pb-1">Donated Amount: <span className="text-[#696868]">{donatedAmount}$</span></p>
                    </div>
                    <progress className="progress" value={donatedAmount} max={maximumDonation}></progress>
                </div>
                <div className="card-actions pt-6 justify-end">
                    <Link to={`/donationcampaign/${_id}`}><PrimaryButton>See Details</PrimaryButton></Link>
                </div>
            </div>
        </div>
    );
};

export default ShowDonation;