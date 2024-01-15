import { IoSettingsOutline } from 'react-icons/io5';
import { useState } from 'react';
import '../../../../Components/Shared/SharedCss/Scrollbar.css'
import { useGetVerifiedTrainer } from '../../../../Hooks/useGetVerifiedTrainer';
import AllVerifiedTrainerModal from './AllVerifiedTrainerModal';

const AllVerifiedTrainer = () => {
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const { trainers, refetch } = useGetVerifiedTrainer();
  console.log(trainers, 'dddd');
  const [trainerInfo, setTrainerInfo] = useState({});
  return (
    <div className=' dark:bg-stone-900  mt-10 p-8  '>
      <div className=' custom-scrollbar-container'>
        <table className='table'>
          {/* head */}
          <thead className='dark:text-white'>
            <tr>
              <th>Index</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Trainer From</th>
              <th> Skills</th>
              <th> Available Day In week</th>
              <th>Trainer Status</th>
              
              <th> Action</th>
            </tr>
          </thead>
          <tbody>
            {trainers?.map((trainer, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img
                        src={trainer.profileImage}
                        alt='Avatar Tailwind CSS Component'
                      />
                    </div>
                  </div>
                </td>
                <td>{trainer.name}</td>
                <td>{trainer.email}</td>
                <td>
                  <p className='  text-xs'>
                    {new Date(trainer.trainerFrom).toLocaleString()}
                  </p>
                </td>
                <td>
                  {trainer.skill?.map((skill, index) => (
                    <span key={index}>{skill},</span>
                  ))}
                </td>

                <td>
                  <p>
                    {trainer.availableTimeWeek?.map((day, index) => (
                      <span key={index}>{day},</span>
                    ))}
                  </p>
                </td>
                <td>{trainer.trainerStatus}</td>
               
                <td>
                  <button
                    onClick={() => {
                      setIsOpen(true), setTrainerInfo(trainer);
                    }}
                    className='btn'>
                    {' '}
                    <IoSettingsOutline className='text-2xl' />{' '}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AllVerifiedTrainerModal
        refetch={refetch}
        trainerInfo={trainerInfo}
        isOpen={isOpen}
        closeModal={closeModal}></AllVerifiedTrainerModal>
    </div>
  );
};

export default AllVerifiedTrainer;
