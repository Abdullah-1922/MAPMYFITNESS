import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa6";
import Swal from "sweetalert2";
import TitleText from "../../Components/Shared/SmallComponents/Title/Title";

const FeaturedClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("FeaturedClasses.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  const handleShowDetails=item=>{
    Swal.fire({
        title: `${item?.classType}`,
        text: `${item?.headline}`,
        html: `${item?.description}`,
        imageUrl: `${item?.img}`,
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: "Custom image",
        confirmButtonText:'back'
      });
  }
  return (
    <div className="pb-20">
        
        <TitleText heading={'OUR FEATURED CLASSES'}></TitleText>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
        breakpoints={{
          // when window width is >= 768px
          200: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
          },
        }}
      >
       
        {classes?.map((item) => (
          <SwiperSlide key={item.classType}>
            <div className="fitness-card  relative overflow-hidden rounded-lg ">
              <div
                className="card-bg   h-[600px] bg-cover bg-center"
                style={{ backgroundImage: `url(${item?.img})` }}
              ></div>
              <div className="card-content text-white absolute  left-20 bottom-10  text-center ">
                <h3 className="text-2xl  my-3 font-black">{item?.classType}</h3>
               
                <button onClick={()=>handleShowDetails(item)} className="btn hover:bg-slate-400 hover:border-none hover:scale-110">MORE INFO <FaArrowRight className="text-xl"></FaArrowRight></button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedClasses;
