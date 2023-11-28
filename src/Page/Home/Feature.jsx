import TitleText from "../../Components/Shared/SmallComponents/Title/Title";

const Feature = () => {
  return (
    <div>
      <div className="">
        <div> 
            <TitleText heading={'WHY YOU NEED US...'}></TitleText>
          <div className="hero  ">
          <div className="flex flex-col items-center lg:flex-row-reverse">
                <div className="flex-1 mx-auto  md:w-1/2"> 
                     <img
                
                src="https://i.ibb.co/zNfSGyr/featured-1.png"
                className="  w-[320px] md:w-full rounded-lg "
              />
                </div>
             
              <div className="px-10 flex-1 md:px-20 lg:pr-28">
                <h1 className="text-4xl font-bold">Personal Trainer keeps you accountable</h1>
                <p className="py-6">
                Your personal trainer will monitor your progression via video sessions, hone your technique and help you move towards your goal effectively and safely whilst having fun as you go. PT is also the best motivation not to skip sessions or quit training altogether.
                </p>
               
              </div>
            </div>
          </div>
        </div>
        <div>
        <div className="hero pb-20">
            <div className="flex flex-col items-center lg:flex-row">
                <div className="flex-1 mx-auto md:w-1/2"> 
                     <img
                
                src="https://i.ibb.co/SKL1Gh3/featured-2.jpg"
                className="  w-[320px] md:w-full rounded-lg "
              />
                </div>
             
              <div className="px-10 flex-1 md:px-20 lg:pr-28">
                <h1 className="text-4xl font-bold">Personal Trainer keeps you accountable</h1>
                <p className="py-6">
                Your personal trainer will monitor your progression via video sessions, hone your technique and help you move towards your goal effectively and safely whilst having fun as you go. PT is also the best motivation not to skip sessions or quit training altogether.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
