import Swal from 'sweetalert2';
import { useEffect } from 'react';
import { imageUpload } from '../../../../API/ImageApi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import Loader from '../../../../Components/Shared/SmallComponents/Loader';
import TitleText from '../../../../Components/Shared/SmallComponents/Title/Title';

import { getTrainer } from '../../../../API/TrainerApi';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { toast } from 'react-toastify';
import { addClass } from '../../../../API/classesApi';
const animatedComponents = makeAnimated();
const AddClasses = () => {
  const [selectedDays, setSelectedDays] = useState([]);

  const { user: loginUser } = useAuth();
  const [user, setUser] = useState({});
  useEffect(() => {
    getTrainer(loginUser?.email).then((res) => setUser(res));
  }, [loginUser]);

  console.log(user);
  const classTopics = user?.skill?.map((topic) => {
    return {
      value: topic,
      label: topic,
    };
  });
  const classPrice = [
    {
      value: 'free',
      label: 'free',
    },
    {
      value: 'silver',
      label: 'silver',
    },
    {
      value: 'diamond',
      label: 'diamond',
    },
  ];

  const classDays = user?.availableTimeWeek?.map((day) => {
    return {
      value: day,
      label: day,
    };
  });

  console.log(selectedDays);

  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState('');
  const [loading, setLoading] = useState(false);
  console.log(Number(user?.availableTimeDay));
  const handlePostBlog = async (e) => {
    setLoading(true);
    e.preventDefault();
    const trainerName = user?.name;
    const trainerEmail = user?.email;
    const classDetail = e.target.classDetail.value;
    const trainerProfilePic = user?.profileImage;
    const classTitle = e.target.title.value;
    const classTopic = e.target.classTopic.value;
    const classPrice = e.target.classPrice.value;

    const classDays = selectedDays;
    const classDuration = e.target.classDuration.value;

    const image = e.target.image.files[0];
    const classImage = await imageUpload(image);
    const classPostDate = new Date();
    const classStudent = [];

    const classInfo = {
      trainerName,
      classTitle,
      classDuration,
      classPrice,
      classTopic,
      classDays,
      classStudent,
      trainerEmail,
      classDetail,
      trainerProfilePic,
      classImage,
      classPostDate,
    };
    console.log(classInfo);

    try {
      const data = await addClass(classInfo);

      if (data.insertedId) {
        setLoading(false);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'class has been added',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/allClasses');
        setSelectedImage('');
        e.target.reset();
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  const checkClassDuration = (e) => {
    if (e.target.value > Number(user?.availableTimeDay) || e.target.value < 1) {
      e.target.value = '';
      toast.error('Choose valid time');
    }
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
  const handleDayChange = (selectedOptions) => {
    const selectedDays = selectedOptions.map((option) => option.value);
    const classDays = selectedDays;
    setSelectedDays(classDays);
  };

  return (
    <div className='pb-40'>
      <TitleText heading={'ADD NEW CLASS'}></TitleText>
      <div>
        <form onSubmit={handlePostBlog}>
          <div className='flex bg-slate-400 rounded-xl p-5 md:p-10 w-full md:w-2/3 mx-auto  flex-col '>
            <div className='form-control w-full '>
              <label className='label'>
                <span className='label-text '>Trainer Name</span>
              </label>
              <input
                type='text'
                placeholder='Name'
                readOnly
                defaultValue={user?.name}
                className='input input-bordered w-full o '
              />
            </div>
            <div className='form-control w-full '>
              <label className='label'>
                <span className='label-text'>Trainer Email</span>
              </label>
              <input
                type='text'
                placeholder='Email'
                readOnly
                defaultValue={user?.email}
                className='input input-bordered w-full  '
              />
            </div>
            <div className='form-control w-full '>
              <label className='label'>
                <span className='label-text'>Class Topic </span>
              </label>
              <Select
                placeholder='Select Class Price'
                name='classPrice'
                options={classPrice}
              />
            </div>
            <div className='form-control w-full '>
              <label className='label'>
                <span className='label-text'>Class Price </span>
              </label>
              <Select
                placeholder='Select Class Topic'
                name='classTopic'
                options={classTopics}
              />
            </div>
            <div className='mb-4'>
              <label className='label'>
                <span className='label-text'> Class Day</span>
              </label>
              <Select
                placeholder={'Select days for class'}
                className='text-black'
                onChange={handleDayChange}
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti={true}
                options={classDays}
              />
            </div>
            <div className='form-control w-full '>
              <label className='label'>
                <span className='label-text'> Class Duration</span>
              </label>
              <input
                max={Number(user?.availableTimeDay)}
                min={1}
                onChange={(e) => checkClassDuration(e)}
                type='number'
                placeholder={`Max value is ${Number(
                  user?.availableTimeDay,
                )} and min value is 1`}
                name='classDuration'
                required
                className='input input-bordered w-full  '
              />
            </div>
            <div className='form-control w-full '>
              <label className='label'>
                <span className='label-text'> Class Title</span>
              </label>
              <input
                type='text'
                placeholder='Title'
                name='title'
                required
                className='input input-bordered w-full  '
              />
            </div>

            <div className='form-control'>
              <label className='label'>
                <span className='label-text  '> Class Details</span>
              </label>
              <textarea
                name='classDetail'
                required
                className='textarea textarea-bordered w-full   h-40'
                placeholder='Input class details'></textarea>
            </div>
            <div className='max-w-md mx-auto mt-2 p-4 bg-gray-100 rounded-md'>
              <label
                htmlFor='image'
                className='block text-sm font-medium text-gray-700'>
                Choose an image for class Banner
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
            <button
              type='submit'
              disabled={loading}
              className='btn bg-green-300 mt-10'>
              {loading ? <Loader /> : 'Add Class'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClasses;
