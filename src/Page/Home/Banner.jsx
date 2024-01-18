import { useNavigate } from "react-router-dom";


const Banner = () => {
  const navigate =useNavigate()
    return (
      <section
      className="relative bg-[url(https://i.ibb.co/LQ07g5g/BANNER.jpg)] bg-cover bg-center bg-no-repeat"
    >
      <div
        className="absolute inset-0 bg-black  bg-opacity-50"
      ></div>
    
      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div className="max-w-xl  text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
          Reach your goals with 
    
            <strong className="block font-extrabold text-rose-700">MAPMYFITNESS  </strong>
          </h1>
    
          <p className="mt-4 text-white max-w-lg sm:text-xl/relaxed">
          Build healthy habits with the all-in-one food, exercise, and calorie tracker.
          </p>
    
          <div className="mt-8 w-1/2 mx-auto text-center">
            <button
              onClick={()=>navigate("/allClasses")}
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </button>
    
            
          </div>
        </div>
      </div>
    </section>
    );
  };
  
  export default Banner;
  