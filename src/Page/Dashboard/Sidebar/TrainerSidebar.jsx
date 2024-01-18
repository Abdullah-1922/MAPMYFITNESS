import { NavLink } from "react-router-dom";
import { SiGoogleclassroom } from "react-icons/si";

const TrainerSidebar = () => {
  return (
    
          <div className="flex flex-col gap-4">
       <NavLink className={'flex gap-3 items-center ml-6'} to={"/dashboard/addClass"}>
        <p className=" text-center uppercase text-black  font-bold">ADD CLASS</p><SiGoogleclassroom className=" text-2xl text-black" />
      </NavLink>
       
    </div>
    
  );
};

export default TrainerSidebar;