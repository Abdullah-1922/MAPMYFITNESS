import { useEffect, useState } from "react";
import { homePageTrainer } from "../../API/TrainerApi";
import { motion } from 'framer-motion';
const OurTrainers = () => {
    const [trainers, setTrainers] = useState([]);
    useEffect(()=>{
    homePageTrainer().then(data => setTrainers(data))

    },[])
    console.log(trainers);
  return (
    <div className="overflow-hidden">
        <h4 className="text-4xl w-2/5 mx-auto text-center my-10 font-bold border-b-2 pb-2 border-black" >OUR <span className="text-red-700 font-black">TRAINERS</span>  </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {
        trainers?.map((trainer ,index) => <motion.div
        initial={{ x: index % 2 === 0 ? -150 : 150, y: 0, opacity: 0 }}
            whileInView={{opacity:1,x:0,y:0}}
            
            exit={{x:-150,opacity:0}}
            transition={{ duration: .4, }}
        key={index} > <div href="#" className="group relative h-[450px] block bg-black">
        <img
          alt="Developer"
          src={trainer.profileImage}
          className="absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-50"
        />
      
        <div className="relative p-4 sm:p-6 lg:p-8">
         
      
          <p className="text-xl font-bold text-white sm:text-2xl">{trainer.name}</p>
           <div className="text-xl font-semibold text-white">Expert of{ trainer?.skill?.map((skill,index)=> <p className="font-bold
            text-red-600" key={index}>{skill}</p>)}</div>
          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div
              className=" transform opacity-0 transition-all group-hover:translate-y-25   md:group-hover:-translate-y-10  lg:group-hover:-translate-y-20 group-hover:opacity-100"
            >
              <div className="text-lg text-white ">
               {trainer.name} is {trainer.age} years old. Available on {trainer?.availableTimeWeek?.map((day,i)=> <span key={i}>{day}{i< trainer?.availableTimeWeek.length -1 ?',':'.' } </span> )}
              </div>
            </div>
          </div>
        </div>
      </div>
        </motion.div>)
      }
    </div></div>
  );
};

export default OurTrainers;