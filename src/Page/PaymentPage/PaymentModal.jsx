import { Dialog, Transition } from '@headlessui/react';

import { Fragment } from 'react';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckOutForm';


const stripePromise =loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)
const PaymentModal = ({ closeModal, isOpen, packageInfo }) => {


  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium text-center border-b-2 pb-2 border-black leading-6 text-gray-900'>
                    {/* Take action for {trainerInfo?.name} */}
                  </Dialog.Title>
                  <div className='p-5 font-serif bg-blue-100'>
                    <p className=' font-semibold '>Your email : {packageInfo.userEmail}</p>
                    <p className='text-lg font-semibold '>Package : <span className='uppercase text-red-600'>{packageInfo.packageName}</span > </p>
                    <p className='text-lg font-semibold '>Price : <span className='uppercase'>{packageInfo.packagePrice} $</span> </p>
                  </div>
                  <Elements stripe={stripePromise}>
                  <CheckoutForm closeModal={closeModal}  packageInfo={packageInfo}/>
                  </Elements>

                  <div
                    onClick={() => closeModal()}
                    className='w-fit mx-auto mt-10'>
                    <p className='btn hover:bg-slate-800  bg-slate-600 text-white'>
                      back
                    </p>
                  </div>

                  <hr className='mt-8 ' />
                  {/* Card data form */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default PaymentModal;
