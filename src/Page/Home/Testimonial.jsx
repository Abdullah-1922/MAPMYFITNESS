import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import TitleText from "../../Components/Shared/SmallComponents/Title/Title";
import './Testimonial.css';
const Testimonial = () => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch("Testimonials.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="p-10 pb-32 text-white reviewImg">
      <TitleText
        heading={"OUR USERS SAYS"}
        subtitle={"Testimonial"}
      ></TitleText>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {reviews?.map((review) => (
          <SwiperSlide key={review?.name}>
            <div>
             
                 
                <div className="text-center ">
                    <div className="w-fit py-2 mx-auto">
                        <img
                    className="w-12 h-12 rounded-full"
                    src="https://lh3.googleusercontent.com/a/ACg8ocJwYwFG1NIH2QIDJPBDI9zHaAHaflle_Of2K_m3G-096ys7=s96-c"
                    alt=""
                  />
                    </div>
                    
                  <p className="text-2xl font-bold">{review?.name}</p>
                  <p className="mt-10 font-semibold">{review?.quote}</p>
                
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
