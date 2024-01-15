import { NavLink } from "react-router-dom";
import { FaUsersGear } from "react-icons/fa6";
import { MdPending } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
const AdminSidebar = () => {
  return (
    <div className="flex flex-col gap-4">
       <NavLink className={'flex gap-3 items-center ml-6'} to={"/dashboard/allUser"}>
        <p className=" text-center uppercase text-black  font-bold">All user </p><FaUsersGear className=" text-2xl text-black" />
      </NavLink>
       <NavLink  className={'flex gap-3 items-center ml-6'}  to={"/dashboard/allPendingTrainer"}>
        <p className=" text-center uppercase text-black  font-bold"> Pending Trainers </p> <MdPending className=" text-2xl text-black" />
      </NavLink>
       <NavLink  className={'flex gap-3 items-center ml-6'}  to={"/dashboard/allVerifiedTrainer"}>
        <p className=" text-center uppercase text-black  font-bold"> Trainers </p><FaPeopleGroup className=" text-2xl text-black" />
      </NavLink>
    </div>
  );
};

export default AdminSidebar;