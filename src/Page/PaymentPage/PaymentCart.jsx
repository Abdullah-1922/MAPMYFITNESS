import { useEffect, useState } from 'react';
import PaymentModal from './PaymentModal';
import { Helmet } from 'react-helmet-async';
import { useGetUSerStatus } from '../../Hooks/useGetUserStatus';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';

const PaymentCart = () => {
  const [packageInfo, setPackageInfo] = useState({});
  let [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  console.log(user);
  const closeModal = () => {
    setIsOpen(false);
  };
  const { status: userStatus } = useGetUSerStatus();

  const svg = (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        className='h-5 w-5 text-blue-700'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M4.5 12.75l6 6 9-13.5'
        />
      </svg>
    </>
  );
  const nonSvg = (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        className='h-5 w-5 text-red-700'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M6 18L18 6M6 6l12 12'
        />
      </svg>
    </>
  );
 useEffect(()=>{
  window.scrollTo(0,0)
 },[])
  console.log(packageInfo);
  return (
    <div>
      <h5 className='text-4xl text-center font-semibold '>
        You are a <span className='uppercase text-red-500'>{userStatus}</span>
        user
      </h5>
      <div className=' grid  grid-clos-1 md:grid-cols-2 lg:grid-cols-3   gap-6 px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
        <Helmet>
          <title>PAYMENT SEC</title>
        </Helmet>
        <div className=''>
          <div className='rounded-2xl border border-blue-600 p-6 shadow-sm ring-1 ring-blue-600 sm:order-last sm:px-8 lg:p-12'>
            <div className='h-[165px]'>
              <h2 className='text-lg font-medium  dark:text-white  text-gray-900'>
                Free
                <span className='sr-only'>Plan</span>
              </h2>

              <p className='mt-2 sm:mt-4'>
                <strong className='text-3xl font-bold  dark:text-white  text-gray-900 sm:text-4xl'>
                  0$
                </strong>

                <span className='text-sm font-medium text-gray-700 dark:text-white'>
                  /month
                </span>
              </p>
            </div>

            <ul className='mt-6 space-y-2'>
              <li className='flex items-center gap-1'>
                {svg}
                <span className='text-gray-700 dark:text-white'>
                  take some free classes
                </span>
              </li>

              <li className='flex items-center gap-1'>
                {nonSvg}
                <span className='text-gray-700 dark:text-white'>
                  Silver Classes
                </span>
              </li>

              <li className='flex items-center gap-1'>
                {nonSvg}

                <span className='text-gray-700 dark:text-white'>
                  Diamond Classes
                </span>
              </li>

              <li className='flex items-center gap-1'>
                {nonSvg}
                <span className='text-gray-700 dark:text-white'>
                  Help center access
                </span>
              </li>

              <li className='flex items-center gap-1'>
                {svg}
                <span className='text-gray-700 dark:text-white'>
                  Phone support
                </span>
              </li>

              <li className='flex items-center gap-1'>
                {nonSvg}
                <span className='text-gray-700 dark:text-white'>
                  Premium Community access
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className=''>
          <div className='rounded-2xl border border-blue-600 p-6 shadow-sm ring-1 ring-blue-600 sm:order-last sm:px-8 lg:p-12'>
            <div className=''>
              <h2 className='text-lg font-medium  dark:text-white  text-gray-900'>
                Silver
                <span className='sr-only'>Plan</span>
              </h2>

              <p className='mt-2 sm:mt-4'>
                <strong className='text-3xl font-bold  dark:text-white  text-gray-900 sm:text-4xl'>
                  200$
                </strong>

                <span className='text-sm font-medium text-gray-700 dark:text-white'>
                  /month
                </span>
              </p>
            </div>

            <ul className='mt-6 space-y-2'>
              <li className='flex items-center gap-1'>
                {svg}
                <span className='text-gray-700 dark:text-white'>
                  take some free classes
                </span>
              </li>

              <li className='flex items-center gap-1'>
                {svg}
                <span className='text-gray-700 dark:text-white'>
                  Silver Classes
                </span>
              </li>

              <li className='flex items-center gap-1'>
                {nonSvg}

                <span className='text-gray-700 dark:text-white'>
                  Diamond Classes
                </span>
              </li>

              <li className='flex items-center gap-1'>
                {svg}
                <span className='text-gray-700 dark:text-white'>
                  Help center access
                </span>
              </li>

              <li className='flex items-center gap-1'>
                {svg}
                <span className='text-gray-700 dark:text-white'>
                  Phone support
                </span>
              </li>

              <li className='flex items-center gap-1'>
                {nonSvg}
                <span className='text-gray-700 dark:text-white'>
                  Premium Community access
                </span>
              </li>
            </ul>

            <button
              onClick={() => {
                if (userStatus === 'silver' || userStatus === 'diamond') {
                  toast.error('You have already subscribed to this plan');
                  return;
                }
                setIsOpen(true),
                  setPackageInfo({
                    packageName: 'silver',
                    packagePrice: 200,
                    userEmail: user.email,
                  });
              }}
              className='mt-8 block rounded-full border border-blue-600 bg-blue-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-blue-700 hover:ring-1 hover:ring-blue-700 focus:outline-none focus:ring active:text-blue-500'>
              Get Started
            </button>
          </div>
        </div>
        {/* diamond card */}
        <div className=''>
          <div className='rounded-2xl border border-blue-600 p-6 shadow-sm ring-1 ring-blue-600 sm:order-last sm:px-8 lg:p-12'>
            <div className=''>
              <h2 className='text-lg font-medium dark:text-white text-gray-900'>
                Diamond
                <span className='sr-only'>Plan</span>
              </h2>

              <p className='mt-2 sm:mt-4'>
                <strong className='text-3xl font-bold  dark:text-white  text-gray-900 sm:text-4xl'>
                  350$
                </strong>

                <span className='text-sm font-medium text-gray-700 dark:text-white'>
                  /month
                </span>
              </p>
            </div>

            <ul className='mt-6 space-y-2'>
              <li className='flex items-center gap-1'>
                {svg}
                <span className='text-gray-700 dark:text-white'>
                  take some free classes
                </span>
              </li>

              <li className='flex items-center gap-1'>
                {svg}
                <span className='text-gray-700 dark:text-white'>
                  Silver Classes
                </span>
              </li>

              <li className='flex items-center gap-1'>
                {svg}

                <span className='text-gray-700 dark:text-white'>
                  Diamond Classes
                </span>
              </li>

              <li className='flex items-center gap-1'>
                {svg}
                <span className='text-gray-700 dark:text-white'>
                  Help center access
                </span>
              </li>

              <li className='flex items-center gap-1'>
                {svg}
                <span className='text-gray-700 dark:text-white'>
                  Phone support
                </span>
              </li>

              <li className='flex items-center gap-1'>
                {svg}
                <span className='text-gray-700 dark:text-white'>
                  Premium Community access
                </span>
              </li>
            </ul>

            <button
              onClick={() => {
                if (userStatus === 'diamond') {
                  toast.error('You have already subscribed to this plan');
                  return;
                }
                setIsOpen(true),
                  setPackageInfo({
                    packagePrice: 350,
                    packageName: 'diamond',
                    userEmail: user.email,
                  });
              }}
              className='mt-8 block rounded-full border border-blue-600 bg-blue-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-blue-700 hover:ring-1 hover:ring-blue-700 focus:outline-none focus:ring active:text-blue-500'>
              Get Started
            </button>
          </div>
        </div>
        <PaymentModal
          isOpen={isOpen}
          closeModal={closeModal}
          packageInfo={packageInfo}></PaymentModal>
      </div>
    </div>
  );
};

export default PaymentCart;
