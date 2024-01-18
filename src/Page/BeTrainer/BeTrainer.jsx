import { useState } from 'react';

import Select from 'react-select';

import makeAnimated from 'react-select/animated';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import { imageUpload } from '../../API/ImageApi';
import { addTrainer } from '../../API/TrainerApi';
import { toast } from 'react-toastify';
import Loader from '../../Components/Shared/SmallComponents/Loader';
import { useGetLoginUser } from '../../Hooks/useGetLoginUser';

const animatedComponents = makeAnimated();
const BeTrainer = () => {
  const { user } = useAuth();
  const {loginUser}=useGetLoginUser()
  const [skills, setSkill] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [loading, setLoading] = useState(false);

  const optionsDays = [
    { value: 'Saturday', label: 'Saturday' },
    { value: 'Sunday', label: 'Sunday' },
    // { value: 'Monday', label: 'Monday' },
    { value: 'Tuesday', label: 'Tuesday' },
    { value: 'Wednesday', label: 'Wednesday' },
    // { value: 'Thursday', label: 'Thursday' },
    { value: 'Friday', label: 'Friday' },
  ];
  const bdTimeZone = 'Asia/Dhaka';
  const options = { timeZone: bdTimeZone };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(loginUser.trainerStatus ==='pending'
      ){
      return  Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please wait for admin Confirmation!',
        })
      }
    if(loginUser.trainerStatus ==='verified'
      ){
      return  Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You are already a trainer!',
        })
      }
    setLoading(true);
    
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const age = form.age.value;
    if (age < 18) {
      setLoading(false);
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You must be at least 18 years old!',
      });
    }
    if (!selectedDays.length > 0) {
      setLoading(false);
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please select at least one day!',
      });
    }
    if (!skills.length > 0) {
      setLoading(false);
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please select at least one skill!',
      });
    }
    const availableTimeDay = form.availableTimeDay.value;
    const availableTimeWeek = selectedDays || [];
    const skill = skills;
    const ImageFile = form.ImageFile.files[0];

    const profileImage = await imageUpload(ImageFile);

    const trainerFrom = new Date().toLocaleString('en-US', options);
     
    const trainerStatus = 'pending';
    const trainerInfo = {
      name,
      email,
      age,
      availableTimeDay,
      availableTimeWeek,
      skill,
      profileImage,
      trainerFrom,
      trainerStatus,
      
    };
    console.log(trainerInfo);
    const data = await addTrainer(trainerInfo);
    if(data.insertedId
      ){
        toast.success('Trainer application successfully');
      }
    console.log(data);
    if (data?.msg == 'Trainer already exist') {
      toast.error('Please wait for admin Confirmation');
      setLoading(false);
    }
    if (data) {
      setLoading(false);
    }
  };
  const handleDayChange = (selectedOptions) => {
    const selectedDays = selectedOptions.map((option) => option.value);
    const availableTimeWeek = selectedDays;
    setSelectedDays(availableTimeWeek);
  };
  const getskill = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      if (skills.length == 3) {
        console.log('innnnnnnn');
        e.preventDefault();
        return Swal.fire('you can  add only 3');
      }
      setSkill([...skills, value]);
    } else {
      setSkill(skills.filter((skill) => skill !== value));
    }
  };
  console.log(skills);
  const skillName = [
    'Functional Training',
    'Strength Training',
    'Pilates',
    'Yoga',
    'Dancing Workout',
    'Pre and Post Natal Exercise',
  ];

  return (
    <div>
      <div className='border-black border md:w-[60%] dark:text-black p-10 bg-slate-200 my-20 mx-auto'>
        <h2 className='text-xl font-semibold text-center border-b-2 w-fit mx-auto px-4 border-black  border-dashed mb-5'>
          Give information to apply for trainer
        </h2>
        <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2'>
              Full Name: (Read Only)
            </label>
            <input
              type='text'
              name='name'
              value={user?.displayName}
              placeholder='Inter your full name'
              readOnly
              className='w-full p-2 border rounded'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2'>
              Email: (Read Only)
            </label>
            <input
              type='email'
              name='email'
              value={user?.email}
              readOnly
              placeholder='Inter your email'
              className='w-full p-2 border rounded'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2'>Age:</label>
            <input
              type='number'
              name='age'
              placeholder='Inter your age'
              className='w-full p-2 border rounded'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2'>Image:</label>
            <input
              type='file'
              name='ImageFile'
              className='w-full bg-slate-300 p-2 border rounded'
            />
          </div>
          <div className='mb-4 '>
            <label className='block text-sm font-bold mb-2'>Skills:</label>
            <div className='flex flex-wrap gap-3'>
              {skillName.map((skill, index) => (
                <div key={index} className='bg-slate-300 p-1 rounded-md '>
                  <label className='cursor-pointer flex '>
                    <span className='mr-2 font-bold'>{skill}</span>
                    <input
                      onChange={(e) => getskill(e)}
                      value={skill}
                      type='checkbox'
                      className='checkbox checkbox-accent'
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className='mb-4'>
            <label className='block  text-sm font-bold mb-2'>
              Available Day in Week(day):
            </label>
            <Select
              placeholder={'Select days for classes'}
              className='text-black'
              onChange={handleDayChange}
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti={true}
              options={optionsDays}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2'>
              Available Time in Day (hour):
            </label>
            <input
              type='text'
              name='availableTimeDay'
              placeholder='Enter available time in day'
              className='w-full p-2 border rounded'
            />
          </div>
          <div className=' w-fit mx-auto'>
            <button
              type='submit'
              disabled={loading}
              className='bg-blue-500  min-w-[100px] text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'>
              {loading ? (
                <div className='w-fit mx-auto '>
                  <Loader />{' '}
                </div>
              ) : (
                'Be a Trainer'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BeTrainer;
