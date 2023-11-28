import Banner from "./Banner";
import BlogHome from "./BlogHome";
import Feature from "./Feature";
import FeaturedClasses from "./FeaturedClasses";
import NewsLetter from "./NewsLetter";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
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