import Swal from 'sweetalert2';
import { Dialog, Transition } from '@headlessui/react';

import { Fragment } from 'react';
import { useGetLoginUser } from '../../../../Hooks/useGetLoginUser';
const ProfileModal = ({ isOpen, closeModal }) => {


const  {loginUser:user,refetch}=useGetLoginUser()

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
                    Take action for {user.userName}
                  </Dialog.Title>

                  <div className='mt-2'>
                    <form >
                    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Your Profile Name</span>
   
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  
</label>


                    </form>
                  </div>
                  <div
                    onClick={() => closeModal()}
                    className='w-fit mx-auto mt-10'>
                    {' '}
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

export default ProfileModal;
