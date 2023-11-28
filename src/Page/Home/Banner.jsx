import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
    return (
      <div className="relative">
        <div
          className="hero h-[618px] lg:rounded-2xl lg:h-[750px]"
          style={{ backgroundImage: "url(https://i.ibb.co/LQ07g5g/BANNER.jpg)" }}
        >
          <div className="hero-overlay bg-opacity-10"></div>
          <div className="flex items-center justify-center text-center bg-black px-10 w-full  h-[618px] lg:h-[750px] lg:rounded-2xl  bg-opacity-10 text-neutral-content">
            <div className="sm:w-4/5 lg:w-3/4 xl:w-2/3  bottom-20">
            
              <h1 className="mb-5 text-2xl sm:text-4xl lg:text-5xl font-bold">
                Reach your goals with <br /> MAPMYFITNESS
              </h1>
              <p className="mb-5 text-sm sm:text-base">
                Build healthy habits with the all-in-one food, exercise, and calorie tracker.
              </p>
              <button className="btn hover:bg-slate-400 hover:border-none hover:scale-110">Get Started <FaArrowRight className="text-xl"></FaArrowRight></button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  