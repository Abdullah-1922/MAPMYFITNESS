
import useAuth from '../../../Hooks/useAuth';


import AdminSidebar from './AdminSidebar';
import CommonSidebar from './CommonSidebar';
import { useGetLoginUser } from '../../../Hooks/useGetLoginUser';
import TrainerSidebar from './TrainerSidebar';


const Sidebar = () => {
  const { user } = useAuth();
     const  {loginUser:userInfo}= useGetLoginUser()
  
  console.log(userInfo);
  return (
    <div className='  overflow-hidden mx-auto'>
      
      <div className='min-w-[200px] mx-auto p-3 l bg-red-200 font-bold'>
        <img className='w-12 h-12 mx-auto rounded-full' src={userInfo?.userPhoto} alt='' />
        <p className=' text-center'>{userInfo?.userName}</p>
        <p className=' text-center'>{user?.email}</p>
        <p className=' text-center uppercase'>{userInfo?.role}</p>
      </div>
      {

        userInfo?.role==='admin' || userInfo?.trainerStatus ==='verified' ?   <div className='py-10 mt-10  bg-blue-200 flex flex-col gap-4'>
         {/* <NavLink to={"/dashboard"}>
        <li className="dark:text-white text-center uppercase text-black  font-bold">Dashboard</li>
      </NavLink> */}
    
       {
        userInfo?.role==='admin' && <AdminSidebar></AdminSidebar>
       }  
       {
        userInfo?.trainerStatus ==='verified'&& <TrainerSidebar></TrainerSidebar>
       }
    </div>: ''
      }
  
    <div className='mt-10 bg-blue-200  rounded-2xl py-10'>
       <CommonSidebar></CommonSidebar>
    </div>
   

      
    </div>
  );
};

export default Sidebar;
