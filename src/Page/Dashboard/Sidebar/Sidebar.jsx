
import useAuth from '../../../Hooks/useAuth';

import { MdForum } from "react-icons/md";
import AdminSidebar from './AdminSidebar';
import CommonSidebar from './CommonSidebar';
import { useGetLoginUser } from '../../../Hooks/useGetLoginUser';
import TrainerSidebar from './TrainerSidebar';
import { NavLink } from 'react-router-dom';



const Sidebar = () => {
  const { user } = useAuth();
     const  {loginUser:userInfo}= useGetLoginUser()
  
  console.log(userInfo);
  console.log( userInfo?.trainerStatus);
  return (
    <div className='  overflow  mx-auto'>
      
      <div className='min-w-[200px] mx-auto p-3 l bg-red-200 font-bold'>
        <img className='w-12 h-12 mx-auto rounded-full' src={userInfo?.userPhoto} alt='' />
        <p className=' text-center'>{userInfo?.userName}</p>
        <p className=' text-center'>{user?.email}</p>
        <p className=' text-center uppercase'>{userInfo?.role}</p>
      </div>
      {

        userInfo?.role==='admin' || userInfo?.trainerStatus ==='verified' ?   <div className='py-10 mt-10  bg-blue-200 flex flex-col gap-4'>
        
    
       {
        userInfo?.role==='admin' && <AdminSidebar></AdminSidebar>
       }  
       {
        userInfo?.trainerStatus ==='verified' && <TrainerSidebar></TrainerSidebar>
       }
        <NavLink className={'flex gap-3 items-center ml-6'} to={"/dashboard/addForums"}>
        <p className=" text-center uppercase text-black  font-bold">ADD Premium forum </p><MdForum
         className=" text-2xl text-black" />
      </NavLink>
    </div>: ''
      }
  
    <div className='mt-10 bg-blue-200  rounded-2xl py-10'>
       <CommonSidebar></CommonSidebar>
    </div>
   

      
    </div>
  );
};

export default Sidebar;
