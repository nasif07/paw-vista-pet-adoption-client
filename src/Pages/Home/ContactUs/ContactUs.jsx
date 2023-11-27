import { FaLocationArrow, FaPhone, FaVoicemail } from "react-icons/fa6";
import Container from "../../../Components/Container";
import PrimaryButton from "../../../Components/PrimaryButton";
import Title from "../../../Components/Title";
import image from "../../../assets/contact_img.png"

const ContactUs = () => {
    return (
        <Container>
            <Title heading={"Contact Us"} subHeading={"Let's Talk Question."} description={"The domestic dog is a doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey."}></Title>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center items-center">
                <div className="w-full space-y-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Your Name</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full bg-[#F5F2EB]" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-textt text-xl font-semibold">Your Email</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full bg-[#F5F2EB]" />
                    </div>
                    <div className="form-control pb-12">
                        <label className="label">
                            <span className="label-textt text-xl font-semibold">Your Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24 bg-[#F5F2EB]" placeholder="Opinion..."></textarea>
                    </div>
                    <PrimaryButton>Send Now</PrimaryButton>
                </div>
                <div>
                    <div className="bg-[#F5F2EB] p-12 rounded-3xl space-y-5">
                        <div className="flex justify-center">
                            <img src={image} alt="" />
                        </div>
                        <div className="pt-10 space-y-4">
                            <div className="flex gap-5">
                                <FaLocationArrow className="text-4xl text-[#FF4880]"></FaLocationArrow>
                                <p className="text-xl">W84 New Park Lan, New York, NY 4586 United States</p>
                            </div>
                            <div className="flex gap-5">
                                <FaPhone className="text-3xl text-[#FF4880]"></FaPhone>
                                <p className="text-xl">+9 (256) 254 9568</p>
                            </div>
                            <div className="flex gap-5">
                                <FaVoicemail className="text-4xl text-[#FF4880]"></FaVoicemail>
                                <p className="text-xl">Contact@ info.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ContactUs;