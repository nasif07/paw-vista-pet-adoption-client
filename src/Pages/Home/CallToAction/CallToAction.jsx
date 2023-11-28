import Container from "../../../Components/Container";
import Title from "../../../Components/Title";
import img1 from "../../../assets/ins1.jpg"
import img2 from "../../../assets/ins2.jpg"
import img3 from "../../../assets/ins3.jpg"
import img4 from "../../../assets/ins4.png"

const CallToAction = () => {
    return (
        <Container>
            <Title heading={"Call To Action"} subHeading={"Transform a Life, Including Yours"}></Title>
            <div className="hero">
                <div className="hero-content max-w-full w-full flex-col lg:flex-row-reverse gap-12">
                    <div className="grid grid-cols-2 gap-4 w-full col-span-1">
                        <img className="rounded-2xl w-[400px] h-[280px]" src={img1} alt="" />
                        <img className="rounded-2xl w-[400px] h-[280px]" src={img2} alt="" />
                        <img className="rounded-2xl w-[400px] h-[280px]" src={img3} alt="" />
                        <img className="rounded-2xl w-[400px] h-[280px]" src={img4} alt="" />
                    </div>
                    <div className="col-span-1 max-w-3xl">
                        <h1 className="text-5xl font-bold">Transform Lives, Adopt a Furry Friend</h1>
                        <p className="py-6 text-xl text-[#676666]">At "Our Paw Vista," we believe in the transformative power of adoption. Every wag of a tail, every purr, and every gentle nuzzle has the potential to change lives – both theirs and yours. Take a moment to envision the joy, companionship, and unconditional love a pet can bring into your home.</p>
                        <h1 className="text-5xl font-bold text-[#FF4880]">Why Adopt?</h1>
                        <p className="py-6 text-xl text-[#676666]">When you adopt a pet, you're not just giving them a home; you're giving them a second chance at happiness. These resilient animals have stories of triumph over adversity, and you have the power to be the hero in their tale. The bond formed through adoption is incomparable, creating a lifetime of cherished memories and shared experiences.</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CallToAction;