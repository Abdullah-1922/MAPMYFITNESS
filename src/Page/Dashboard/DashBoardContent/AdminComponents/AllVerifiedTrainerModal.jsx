import Swal from 'sweetalert2';
import { Dialog, Transition } from '@headlessui/react';
import { makeTrainerPending, rejectTrainer } from '../../../../API/userApi';
import { Fragment } from 'react';

const AllVerifiedTrainerModal = ({
  isOpen,
  refetch,
  closeModal,
  trainerInfo,
}) => {
  const handleMakePending = (trainer) => {
    Swal.fire({
      title: 'Are you sure ?',
      text: `It will make ${trainer.name}'s trainer status pending`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `Yes,make ${trainer?.name} pending`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const data = await makeTrainerPending(trainer?.email);
        console.log(data);
        if (data.modifiedCount === 1) {
          Swal.fire({
            title: 'For more action check Pending Trainer section',
            text: `${trainer.name} is pending  trainer now.`,
            icon: 'success',
          });

          refetch();
          closeModal();
        }
      }
    });
  };
  const handleDeleteTrainer = (trainer) => {
    Swal.fire({
      title: 'Are you sure to delete?',
      text: 'Trainer Status will be rejected.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `Yes,remove ${trainer?.name}'s Trainer post `,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const data = await rejectTrainer(trainer?.email);
        console.log(data);
        if (data.modifiedCount === 1) {
          Swal.fire({
            title: 'Trainer post removed',
            text: `${trainer.name} can apply again for trainer.`,
            icon: 'success',
          });

          refetch();
          closeModal();
        }
      }
    });
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
                    Take action for {trainerInfo?.name}
                  </Dialog.Title>

                  <div className='mt-2'>
                    {trainerInfo && (
                      <div className='flex  pt-5 gap-10 w-fit mx-auto'>
                        <button
                          onClick={() => handleMakePending(trainerInfo)}
                          className='btn hover:bg-black bg-red-600 text-white'>
                          Make Status pending
                        </button>
                        <button
                          onClick={() => handleDeleteTrainer(trainerInfo)}
                          className='btn hover:bg-black bg-red-600 text-white'>
                          Delete Trainer
                        </button>
                      </div>
                    )}
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

export default AllVerifiedTrainerModal;
