import { MdMenu } from "react-icons/md";
import Sidebar from "../../Page/Dashboard/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import '../../../src/index.css'
import SidebarFooter from "../../Page/Dashboard/DashBoardContent/CommonComponents/SidebarFooter";
const DashBoard = () => {
  return (
    <div className="drawer dark:text-white  lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content dark:bg-slate-800 min-h-screen  min-w-full  ">
   
    <label htmlFor="my-drawer-2" className=" text-5xl  drawer-button lg:hidden"><MdMenu /></label>
  
<Outlet></Outlet>
 
  </div> 
  <div className="drawer-side ">
    {/* <label htmlFor="my-drawer-2" className="drawer-overlay"></label>  */}
    <div className=" w-80 min-h-screen flex flex-col bg-base-300 dark:bg-slate-700 text-base-content">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className=" text-5xl  drawer-button lg:hidden"><MdMenu /></label>
       <div className="flex-grow"> <Sidebar></Sidebar></div>
     
      <div className='  '>
        <SidebarFooter></SidebarFooter>
      </div>
    </div>
  
  </div>
</div>
  );
};

export default DashBoard;