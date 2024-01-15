/* eslint-disable react/no-unescaped-entities */

import { Dialog, Transition } from '@headlessui/react';

import { Fragment, useState } from 'react';
import { useGetLoginUser } from '../../../../Hooks/useGetLoginUser';
import useAuth from '../../../../Hooks/useAuth';
import { imageUpload } from '../../../../API/ImageApi';
import axiosSecure from '../../../../API/axiosSecure';
import { toast } from 'react-toastify';
import Loader from '../../../../Components/Shared/SmallComponents/Loader';
const ProfileModal = ({ isOpen, closeModal }) => {
    const {updateUserProfile}=useAuth()
  const { loginUser: user, refetch } = useGetLoginUser();
  const [selectedImage, setSelectedImage] = useState('');
  const[loading,setLoading]=useState(false)
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  const handleUpdateProfile = async(e) => {
    setLoading(true)
    e.preventDefault();
    const updatedName = e.target.name.value;
    const updatedImage = selectedImage;
   const profileImage = await imageUpload(updatedImage)


      await updateUserProfile(updatedName,profileImage)
      const updatedUser = {
        
        userName: updatedName,
        userPhoto: profileImage
      }
      try{
 const {data} = await axiosSecure.put(`/user/update/${user.email}`,updatedUser)
        if(data.modifiedCount){
            toast.success('Profile updated')
            setLoading(false)
        }
        refetch()
        closeModal()
      } catch(err){
        console.log(err);
        setLoading(false)
      } 
     

   
  };

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
                    {user?.userName}'s Profile <br />
                   {
                    user?.trainerStatus ==='verified' && <p> It will Update your trainer profile also</p>
                   }
                  </Dialog.Title>

                  <div className='mt-2 w-4/5 mx-auto'>
                    <form onSubmit={handleUpdateProfile}>
                      <label className='form-control w-full max-w-xs'>
                        <div className='label'>
                          <span className='  text-sm font-medium text-gray-700'>
                            Your Profile Name
                          </span>
                        </div>
                        <input
                          type='text'
                          name='name'
                          placeholder='Type here'
                          className='input input-bordered w-full max-w-xs'
                        />
                      </label>

                      <div className='max-w-md mx-auto  p-4 bg-gray-100 rounded-md'>
                        <label
                          htmlFor='image'
                          className='block text-sm font-medium text-gray-700'>
                          Choose an image for profile
                        </label>
                        <input
                          type='file'
                          id='image'
                          name='image'
                          required={true}
                          className='mt-1 p-2 border rounded-md w-full'
                          onChange={handleImageChange}
                        />
                        {selectedImage && (
                          <div className='mt-4'>
                            <img
                              src={selectedImage}
                              alt='Selected'
                              className='max-w-full  max-h-[300px] rounded-md'
                            />
                          </div>
                        )}
                      </div>
                      <div className='w-fit mx-auto'>
                        <button className='btn bg-black hover:scale-90 hover:bg-black text-white b'>
                          
                        {
                            loading ? <Loader/> :   'UPDATE PROFILE'
                        }
                        </button>
                      </div>
                    </form>
                  </div>

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

export default ProfileModal;
