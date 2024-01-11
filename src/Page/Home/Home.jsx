import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import BlogHome from "./BlogHome";
import Feature from "./Feature";
import FeaturedClasses from "./FeaturedClasses";
import NewsLetter from "./NewsLetter";
import Testimonial from "./Testimonial";

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
            <FeaturedClasses></FeaturedClasses>
            <Testimonial></Testimonial>
            <BlogHome></BlogHome>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;