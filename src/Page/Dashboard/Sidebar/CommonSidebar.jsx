import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { TbSocial } from 'react-icons/tb';
import { CiCirclePlus } from 'react-icons/ci';
import { BiAnchor } from "react-icons/bi";
import { BsFilePost } from "react-icons/bs";
const CommonSidebar = () => {
  return (
    <div className='flex flex-col  gap-4'>
      <NavLink className='flex ml-6 gap-3 items-center' to={'/'}>
        <p className='dark:text-black text-center uppercase text-black  font-bold'>
          Back to Home
        </p>
        <FaHome className=' text-2xl text-black' />
      </NavLink>
      <NavLink className='flex ml-6 gap-3 items-center' to={'/blog'}>
        <p className='dark:text-black text-center uppercase text-black  font-bold'>
          Community Blog
        </p>
        <TbSocial className=' text-2xl text-black' />
      </NavLink>
      <NavLink
        className='flex ml-6 gap-3 items-center'
        to={'/userJoinedClasses'}>
        <p className='dark:text-black text-center uppercase text-black  font-bold'>
          My joined classes
        </p>
        <BiAnchor className=' text-2xl text-black' />
      </NavLink>
      <NavLink
        className='flex ml-6 gap-3 items-center'
        to={'/addBlog'}>
        <p className='dark:text-black text-center uppercase text-black  font-bold'>
          ADD Blog
        </p>
        <CiCirclePlus className=' text-2xl text-black' />
      </NavLink>
      <NavLink
        className='flex ml-6 gap-3 items-center'
        to={'/addTrainer'}>
        <p className='dark:text-black text-center uppercase text-black  font-bold'>
          Apply For trainer
        </p>
        <BsFilePost className=' text-2xl text-black' />
      </NavLink>
    </div>
  );
};

export default CommonSidebar;
