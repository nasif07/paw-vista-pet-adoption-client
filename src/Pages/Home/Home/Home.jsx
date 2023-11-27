import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner";
import CallToAction from "../CallToAction/CallToAction";
import Categories from "../Category/Categories";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Categories></Categories>
            <CallToAction></CallToAction>
            <AboutUs></AboutUs>
        </>
    );
};

export default Home;