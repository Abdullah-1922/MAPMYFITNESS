import { Link, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

import SocialLogin from '../Login/SocialLogin';
import useAuth from '../../Hooks/useAuth';
import { useState } from 'react';
import { imageUpload } from '../../API/ImageApi';

import axiosPublic from '../../API/axiosPublic';

const Register = () => {
  const { createUser, updateUserProfile, logOut } = useAuth();
  const [selectedImage, setSelectedImage] = useState('');
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);

    const profileImg = await imageUpload(selectedImage);

    createUser(data.email, data.password).then((res) => {
      const loggedUser = res.user;
      console.log(loggedUser);
      updateUserProfile(data.name, profileImg)
        .then(async () => {
          // create user entry in database
          const userData = {
            email: data.email,
            role: 'user',
            userFrom: new Date(),
            lastLogin: new Date(),
            userName: data.name,
            userPhoto: profileImg,
            trainerStatus: 'not applied',
            userStatus:'free'
          };
          console.log(userData);

          try {
            const res = await axiosPublic.put(`/users/${data.email}`, userData);
            console.log(res);

            console.log(res.data);
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                title: ' SignUp successfully',
                text: 'you can access all services',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,
              });
              logOut();
              navigate('/login');
            }
          } catch (error) {
            console.log(error);
          }
        })
        .catch((err) => console.log(err));
    });
  };
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
  return (
    <div className='py-10 dark:bg-slate-800'>
      <Helmet>
        <title>MAPMYFITNESS | SignUp</title>
      </Helmet>
      <div className='w-4/5 mx-auto min-h-screen '>
        <div className='flex lg:gap-10 flex-col lg:flex-row'>
          <div className='   flex flex-col justify-center items-center '>
            <h1 className='text-5xl font-bold'>Sign Up now!</h1>
            <p className='py-6'>
              Sign up to get access to all the features of MAPMYFITNESS.
            </p>
          </div>
          <div className='card w-full  dark:bg-slate-600 bg-green-100'>
            <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <input
                  type='text'
                  name='name'
                  {...register('name', { required: true, minLength: 3 })}
                  placeholder='name'
                  className='input input-bordered'
                />
                {errors.name && (
                  <span className='text-red-700 my-2'>
                    This field is required
                  </span>
                )}
              </div>

              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  name='email'
                  {...register('email')}
                  placeholder='email'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md'>
                <label
                  htmlFor='image'
                  className='block text-sm font-medium text-gray-700'>
                  Choose an image
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
                      className='max-w-full  max-h-[400px] rounded-md'
                    />
                  </div>
                )}
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  name='password'
                  {...register('password', {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    //  pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@ /$!%*?&]{6,20}/
                  })}
                  placeholder='password'
                  className='input input-bordered'
                />
                {errors.password?.type === 'minLength' && (
                  <span className='text-red-700 my-2'>
                    password must be 6 Characters
                  </span>
                )}
                {errors.password?.type === 'maxLength' && (
                  <span className='text-red-700 my-2'>
                    password must be less then 20 Characters
                  </span>
                )}
                {/* {errors.password?.type === 'pattern' && <span className="text-red-700 my-2">password must one uppercase ,one lowercase,one special character, one number</span>} */}
              </div>

              <div className='form-control mt-6'>
                <button type='submit' className='btn btn-primary'>
                  Sign up
                </button>
              </div>
              <div className='w-fit mx-auto'>
                <SocialLogin></SocialLogin>
              </div>
            </form>
            <p className='w-fit dark:text-black pb-4 mx-auto'>
              Have an account{' '}
              <Link to={'/login'} className='text-red-500 font-bold'>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
