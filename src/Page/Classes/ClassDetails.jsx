import { useParams } from 'react-router-dom';
import { getClassInfo } from '../../API/classesApi';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
const ClassDetails = () => {
  const params = useParams();
  console.log(params.id);
  const [data, setData] = useState({});
  useEffect(() => {
    getClassInfo(params.id).then((res) => setData(res));
  }, [params.id]);
  console.log(data);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full '>
      <h5 className='text-3xl text-center font-bold border-b-2 px-5  text-red-500 border-black w-fit mx-auto'>
        Class Details
      </h5>
      <Helmet>
        <title>Class Details</title>
      </Helmet>
      <div className=' w-[350px] py-24 mx-auto  sm:w-[500px] md:w-[600px] lg:w-[800px]'>
        <div className=' mx-auto h-[400px] md:h-[500px] lg:h-[550px] '>
          <img
            className='w-full h-full object- object-cover hover:object-contain transition rounded-t-lg'
            src={data.classImage}
            alt=''
          />
        </div>
        <div className='text-sm flex justify-center items-center gap-5 py-5  font-medium space-y-1'>
          <div className='w-14 h-14 '>
            <img
              className='w-full  rounded-full h-full object-cover'
              src={data.trainerProfilePic}
              alt='TrainerProfile Pic'
            />
          </div>
          <div>
            <p className=' '> Trainer : {data.trainerName}</p>
            <p className=' '> Email : {data.trainerEmail}</p>
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          <div className=' font-medium items-center flex pb-4 gap-3 flex-wrap'>
            <p>
              Class Days :
              {data?.classDays?.map(
                (date, index) =>
                  date + (index < data.classDays.length - 1 ? ', ' : '.'),
              )}
            </p>
            <p> Duration : {data.classDuration} hours.</p>
            <p>
              Post Date :
              {new Date(data?.classPostDate).toLocaleDateString('en-GB')} .
            </p>
            <p>Class Topic : {data.classTopic}</p>
            <p className='font-bold uppercase border w-fit rounded-xl p-1 text-red-600 border-black'>
              {data.classPrice}
            </p>
          </div>

          <div>
            <h4 className='text-xl font-bold'>Title : {data.classTitle}</h4>
            <p className='font-medium'> Description : {data.classDetail} </p>
            <p className='font-medium'>
              Student Enroll : {data.classStudent?.length ?? 0}
            </p>
          </div>
        </div>
        <div className='w-fit mt-6 mx-auto'>
          <button
            //   onClick={()=>navigate(`/class/${singleClass._id}`)}
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
              
              Join
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
