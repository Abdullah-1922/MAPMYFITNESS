/* eslint-disable react/no-unescaped-entities */
import TitleText from "../../Components/Shared/SmallComponents/Title/Title";
import { motion } from 'framer-motion';
const Feature = () => {
 
  
  return (
    <div >
      <div className="overflow-hidden">
        <motion.div
          initial={{x:150,y:0,opacity:0}}
          whileInView={{opacity:1,x:0,y:0}}
          // animate={{x:0,y:0}}
          exit={{x:-150,opacity:0}}
          transition={{ duration: 1 }}
        >
          <TitleText heading={'WHY YOU NEED US...'}></TitleText>
        </motion.div>

        <div
        
        className="hero  ">
          <motion.div
           initial={{x:-250,y:0,opacity:0}}
           whileInView={{opacity:1,x:0,y:0}}
           // animate={{x:0,y:0}}
         
           transition={{ duration: 1 }}
          className="flex flex-col items-center lg:flex-row-reverse">
            <div className="flex-1 mx-auto md:w-1/2">
              <img
                src="https://i.ibb.co/zNfSGyr/featured-1.png"
                className="  w-[320px] md:w-full rounded-lg "
              />
            </div>

            <div className="px-10 flex-1 md:px-20 lg:pr-28">
              <h1 className="text-4xl font-bold">
                Personal Trainer keeps you accountable
              </h1>
              <p className="py-6">
                Your personal trainer will monitor your progression via video
                sessions, hone your technique and help you move towards your
                goal effectively and safely whilst having fun as you go. PT is
                also the best motivation not to skip sessions or quit training
                altogether.
              </p>
            </div>
          </motion.div>
        </div>

        <div 
        
        className="hero pb-20">
          <motion.div 
           initial={{x:250,y:0,opacity:0}}
           whileInView={{opacity:1,x:0,y:0}}
           // animate={{x:0,y:0}}
         
           transition={{ duration: 1 }}
          className="flex flex-col items-center lg:flex-row">
            <div className="flex-1 mx-auto md:w-1/2">
              <img
                src="https://i.ibb.co/SKL1Gh3/featured-2.jpg"
                className="  w-[320px] md:w-full rounded-lg "
              />
            </div>

            <div className="px-10 flex-1 md:px-20 lg:pr-28">
              <h1 className="text-4xl font-bold">
              Fitness Redefined: Partnering with Progress
              </h1>
              <p className="py-6">
              Partnering with a personal fitness trainer goes beyond routines; it's a commitment to progress. Through video sessions, your trainer not only hones your technique but becomes a catalyst for motivation. Their watchful eye ensures effective and safe workouts, while the accountability they instill prevents the temptation to skip sessions. With a personal trainer, your fitness journey transforms into a dynamic, goal-driven adventure, guided by expertise and fueled by the motivation not to just exercise but to evolve.
              </p>
              
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
