import { useContext } from 'react';
import './Navbar.css';
import { FiSun } from 'react-icons/fi';
import { MdModeNight } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import useMode from '../../../Hooks/useMode';
import { AuthContext } from '../../../Provider/AuthContextProvider';
// import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then((res) => console.log(res));
  };

  const NavLi = (
    <>
      <NavLink to={'/'}>
        <li className='dark:text-white uppercase text-black  font-bold'>
          HOME
        </li>
      </NavLink>
      <NavLink to={'/blog'}>
        <li className='dark:text-white uppercase text-black font-bold'>
          Community
        </li>
      </NavLink>
      <NavLink to={'/gallery'}>
        <li className='dark:text-white uppercase text-black font-bold'>
          Gallery
        </li>
      </NavLink>
      <NavLink to={'/trainerPage'}>
        <li className='dark:text-white uppercase text-black font-bold'>
          Trainers
        </li>
      </NavLink>

      <NavLink to={'/allClasses'}>
        <li className='dark:text-white uppercase text-black font-bold'>
          Classes
        </li>
      </NavLink>
      <NavLink to={'/dashboard'}>
        <li className='dark:text-white uppercase text-black font-bold'>
          DashBoard
        </li>
      </NavLink>

      {/* {user && isAdmin && (
            <NavLink to={"/dashboard/adminHome"}>
              <li className="lg:text-white text-black font-semibold">Dashboard</li>
            </NavLink>
          )}
          {user && !isAdmin && (
            <NavLink to={"/dashboard/userHome"}>
              <li className="lg:text-white text-black font-semibold">Dashboard</li>
            </NavLink>
          )} */}
      {/* <Link to={"/dashboard/cart"}>
            <button className="btn btn-sm">
              <FaCartShopping></FaCartShopping>
              <div className="badge badge-secondary">+{cart?.length}</div>
            </button>
          </Link> */}
    </>
  );

  const { mode, changeTheme } = useMode();
  return (
    <div className=' dark:bg-slate-600'>
      <div onScroll={scroll} className=' text-black   '>
        <div className='navbar'>
          <div className='navbar-start'>
            <div className='dropdown'>
              <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className='menu space-y-2  dark:text-white bg-slate-500 dropdown-content mt-6 z-[1] p-2 shadow  rounded-box w-52'>
                {NavLi}
              </ul>
            </div>
            <div className='w-24 flex items-center h-[68px]'>
              <img
                className='object-contain justify-center '
                src='https://i.ibb.co/YNLLqFg/LOGO12.png'
                alt='logo'
              />
            </div>
          </div>
          <div className='navbar-center  hidden lg:flex'>
            <ul className='menu flex gap-6  menu-horizontal px-1'>{NavLi}</ul>
          </div>
          <div className='navbar-end'>
            <button onClick={changeTheme}>
              {mode == 'light' ? (
                <MdModeNight
                  className='text-3xl mx-3'
                  onClick={changeTheme}></MdModeNight>
              ) : (
                <FiSun className='text-3xl mx-3' onClick={changeTheme}></FiSun>
              )}
            </button>
            {user ? (
              <>
                <div className=''>
                  <div className=' '>
                    <img
                      className='w-14 h-14  rounded-full '
                      src={user.photoURL}
                      alt='Avatar'
                    />
                  </div>

                  <button
                    onClick={handleLogOut}
                    className='dark:text-white text-black font-bold'>
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to={'/login'}>
                  <button className='dark:text-white mr-2 text-black font-bold'>
                    LOGIN
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
