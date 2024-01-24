import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTrainer } from '../../API/TrainerApi';
import { Helmet } from 'react-helmet-async';

const TrainerDetails = () => {
  const {id} = useParams(); 
  const navigate = useNavigate();
  const [trainerInfo, setTrainerInfo] = useState({});
  useEffect(() => {
    getTrainer(id).then((res) => setTrainerInfo(res));
  }, [id]);
  console.log(trainerInfo);
 
  return (
    <div>
      <Helmet>
        <title>Trainer Details</title>
      </Helmet>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
          <div className='relative h-[350px] overflow-hidden rounded-lg sm:h-[400px] lg:order-last lg:h-full'>
            <img
              alt='Party'
              src={trainerInfo.profileImage}
              className='absolute inset-0 h-full w-full object-cover'
            />
          </div>

          <div className='lg:py-24'>
            <h2 className='text-3xl font-bold sm:text-4xl'>
              {trainerInfo.name}
            </h2>

            <div className='mt-4 text-gray-600 dark:text-white'>
              <p className='text-lg font-bold'>Email: {trainerInfo.email}</p>
              <p className='text-lg font-medium'>
                Expert of :
                <span className='ml-1'>
                  {trainerInfo.skill?.map(
                    (data, index) =>
                      data +
                      (index < trainerInfo.skill.length - 1 ? ', ' : '.'),
                  )}
                </span>
              </p>
              <p className='text-lg font-medium'>
                AvailableTimeWeek :
                <span className='ml-1'>
                  {trainerInfo.availableTimeWeek?.map(
                    (data, index) =>
                      data +
                      (index < trainerInfo.availableTimeWeek.length - 1
                        ? ', '
                        : '.'),
                  )}
                </span>
              </p>
              <div className='text-lg font-medium gap-2 flex'>
                <p> Trainer from {trainerInfo.trainerFrom} ,</p>
                <p>Age : {trainerInfo.age}</p>
              </div>
              <p>Available slot : {trainerInfo.availableTimeDay}</p>
            </div>

            <button
             onClick={() => navigate(`/trainerClasses/${trainerInfo?._id}`)}
              className='mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400'>
              See All Classes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerDetails;
