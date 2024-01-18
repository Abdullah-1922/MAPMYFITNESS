import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import BlogHome from "./BlogHome";
import Feature from "./Feature";
import FeaturedClasses from "./FeaturedClasses";
import NewsLetter from "./NewsLetter";
import Testimonial from "./Testimonial";
import DisplayFeatures from "./DisplayFeatures";
import MostAskQue from "./MostAskQue";
import OurTrainers from "./OurTrainers";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    HOME
                </title>
            </Helmet>
            <Banner></Banner>
            <Feature></Feature>
            <DisplayFeatures></DisplayFeatures>
            <OurTrainers></OurTrainers>
            <FeaturedClasses></FeaturedClasses>
            <Testimonial></Testimonial>
            <BlogHome></BlogHome>
            <NewsLetter></NewsLetter>
            <MostAskQue></MostAskQue>
        </div>
    );
};

export default Home;