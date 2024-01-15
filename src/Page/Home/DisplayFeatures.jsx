import { GiStrong } from "react-icons/gi";
import { GiStrongMan } from "react-icons/gi";
import { GiMeditation } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { MdOutlinePregnantWoman } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";
import { motion } from 'framer-motion';
import TitleText from "../../Components/Shared/SmallComponents/Title/Title";
const DisplayFeatures = () => {

    const features =[
        {
            id:1,
            icon:<GiStrong /> ,
            title:"Functional Training",
            description:"Join our Functional Training classes to enhance your overall strength, flexibility, and agility. Incorporate dynamic movements into your routine for a functional and efficient workout experience."
        },
        {
            id:2,
            icon:<GiStrongMan /> ,
            title:"Strength Training",
            description:"Discover the benefits of Strength Training. Our classes focus on resistance exercises to help you build muscle, increase bone density, and boost your metabolism."
        },
        {
            id:3,
            icon:<GiMeditation /> ,
            title:"Pilates",
            description:"Experience the power of Pilates in improving your core strength and flexibility. Our Pilates classes emphasize controlled movements, proper breathing, and mindfulness for a holistic approach to fitness."
        },
        {
            id:4,
            icon:<GrYoga /> ,
            title:"Yoga Class",
            description:"Join our Yoga classes to find balance and harmony in both body and mind. Explore various yoga poses, breathing techniques, and meditation to promote relaxation, flexibility, and mental well-being."
        },
        {
            id:5,
            icon:<FaBowlFood /> ,
            title:"Nutrition Plan",
            description:"Fuel your body with precision and purpose. Our nutrition plans, curated by experts, are designed to complement your fitness goals. Discover personalized meal guides."
        },
        {
            id:6,
            icon:<MdOutlinePregnantWoman /> ,
            title:"Pre and Post Natal Exercise",
            description:"Our Pre and Post Natal Exercise classes are designed to support expecting and new mothers. Experience gentle exercises and stretches that focus on maintaining strength, flexibility, and overall well-being during and after pregnancy."
        }
    ]
  return (
    <div className=" overflow-x-hidden  pb-20 overflow-hidden">
        <TitleText heading={'Our Features'}subtitle={'Explore our comprehensive range of fitness services and offerings to suit your needs and goals.'} ></TitleText>
        <p className= "text-lg md:text-2xl pb-10 text-center lg:text-3xl"></p>

      <div className="grid grid-cols-1 sm:grid-cols-2 overflow-hidden lg:grid-cols-3 gap-7">
        {
            features.map((feature,index)=> <motion.div 
            initial={{ y: index % 2 === 0 ? -150 : 150, x: 0, opacity: 0 }}
            whileInView={{opacity:1,x:0,y:0}}
            
            exit={{x:-150,opacity:0}}
            transition={{ duration: .4 }}
            className=" bg-slate-900 p-8 text-gray-100 overflow-x-hidden  rounded-lg shadow-lg hover:scale-105 duration-300"
            key={index}>
               <div
               
               className="text-7xl my-5 w-fit mx-auto">
               {
                feature.icon
               }
               </div>
               <h2 className="text-center text-2xl mb-5 font-bold">{feature.title}</h2>
               <p className="text-lg font-semibold">{feature.description}</p>


            </motion.div>)
        }
      </div>
    </div>
  );
};

export default DisplayFeatures;