import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";


import TitleText from "../../Components/Shared/SmallComponents/Title/Title";
import { getHomeClasses } from "../../API/classesApi";

const FeaturedClasses = () => {


 

  const [homeClasses, setHomeClasses] = useState()
  useEffect(()=>{
    getHomeClasses().then(res=>setHomeClasses(res))
  },[])
  
  return (
    <div className="pb-10">
        
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
       
        {homeClasses?.map((singleClass,index) => (
          <SwiperSlide key={index}>
          
          <div
           
            className='card overflow-hidden h-[660px] dark:bg-slate-700 bg-slate-200 shadow-xl'>
            <div className='h-[400px] '>
              <img
                className='w-full h-full object-cover '
                src={singleClass?.classImage}
                alt='Shoes'
              />
            </div>
            <div className=' space-y-1 mt-2 p-5 '>
              <p className='  font-medium'>
                Trainer : {singleClass?.trainerName}
              </p>
              <p className=' font-medium'>Topic : {singleClass?.classTopic}</p>
              <p className=' font-medium'>
                Days :
                {singleClass?.classDays?.map(
                  (data, index) =>
                    data +
                    (index < singleClass?.classDays?.length - 1 ? ', ' : '.'),
                )}
              </p>

              <p className='font-bold text-lg'>
                Title : {singleClass?.classTitle?.slice(0, 50)}
              </p>
              <div className='card-actions justify-end'>
                <div className='badge badge-outline'>
                  {singleClass.classPrice}
                </div>
              </div>
             
            </div>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedClasses;
