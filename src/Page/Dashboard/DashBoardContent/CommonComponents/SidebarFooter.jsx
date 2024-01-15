import { LuLogOut } from "react-icons/lu";
import useAuth from "../../../../Hooks/useAuth";
import { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import ProfileModal from "./ProfileModal";
const SidebarFooter = () => {
    const {user,logOut}=useAuth()
    const [isOpen,setIsOpen]=useState(false)
    const closeModal=()=>{
        setIsOpen(false)
    }
    const openModal=()=>{
        setIsOpen(true)
    }

  return (
    <div  className='flex  py-5 items-center flex-col gap-3    h-full'>
        <div className=" ">
            <button onClick={()=>openModal()} className="text-2xl px-10 py-2  bg-black text-white rounded-lg flex items-center gap-3">Profile <IoMdSettings /> </button>
        </div>

        <div className=" ">
            <button onClick={()=>logOut()} className="text-2xl px-10 py-2  bg-red-800 text-white rounded-lg flex items-center gap-3">LogOut <LuLogOut /></button>
        </div>
        <ProfileModal closeModal={closeModal} isOpen={isOpen}  ></ProfileModal>
       
      
    </div>
  );
};

export default SidebarFooter;