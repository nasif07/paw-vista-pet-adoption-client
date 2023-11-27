import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner";
import CallToAction from "../CallToAction/CallToAction";
import Categories from "../Category/Categories";
import ContactUs from "../ContactUs/ContactUs";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Categories></Categories>
            <CallToAction></CallToAction>
            <AboutUs></AboutUs>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
        </>
    );
};

export default Home;