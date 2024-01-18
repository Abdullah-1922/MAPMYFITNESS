import { useNavigate } from 'react-router-dom';
import TitleText from '../../Components/Shared/SmallComponents/Title/Title';
import { useGetVerifiedTrainer } from '../../Hooks/useGetVerifiedTrainer';
import {Helmet} from 'react-helmet-async'
const TrainerPage = () => {
  const { trainers } = useGetVerifiedTrainer();
  const navigate =useNavigate()
  console.log(trainers);
  return (
    <div className='w-[90%] py-10 mx-auto'>
      <Helmet>
        <title>Trainers</title>
      </Helmet>
      <TitleText heading={'Our Expert Trainers'}></TitleText>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14'>
        {trainers.map((trainer, index) => (
          <div key={index} className='card   shadow-xl'>
            <div className='h-[400px] '>
              <img
                className='w-full h-full object-cover '
                src={trainer.profileImage}
                alt='Shoes'
              />
            </div>
            <div className='card-body'>
              <h2 className='card-title'>{trainer.name}</h2>
              <p className=' font-medium'>
                Skills :
                {trainer.skill.map(
                  (data, index) =>
                    data +
                    (index < trainer.skill.length - 1 ? ', ' : '.'),
                )}
              </p>
              <p className='text-lg font-semibold'>Available slot : {trainer.availableTimeDay}  </p>
              <div className='card-actions justify-center'>
              <button
                  onClick={() => navigate(`/trainer/${trainer.email}`)}
                  className='group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500'>
                  <span className='absolute -start-full transition-all group-hover:start-4'>
                    <svg
                      className='h-5 w-5 rtl:rotate-180'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </span>

                  <span className='text-sm font-medium transition-all group-hover:ms-4'>
                    Details
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerPage;
