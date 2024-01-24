import { useEffect, useState } from "react";
import { deleteUserClass, myJoinedClasses } from "../../../../API/classesApi";
import useAuth from "../../../../Hooks/useAuth";
import { MdDelete } from "react-icons/md";
import TitleText from "../../../../Components/Shared/SmallComponents/Title/Title";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const MyJoinedClasses = () => {
    const {user}=useAuth()
    console.log(user?.email);
    const navigate=useNavigate()
    const [myjoinclasses,setmyjoinclasses]=useState([])
    useEffect(()=>{
      myJoinedClasses(user?.email).then(data=>setmyjoinclasses(data))
    },[user])

    const handleRemoveClass= async(id)=>{
    
   const deleteInfo ={
    classId:id,userEmail:user?.email
   }
   console.log(deleteInfo);
  const res= await deleteUserClass(deleteInfo)
   if(res.modifiedCount>0){
    const remaining=myjoinclasses.filter(clas=>clas._id!==id)
    setmyjoinclasses(remaining)
    toast.success('Class removed successfully')
   }
    }
    if(myjoinclasses.length===0){
      return <div className='text-center text-3xl font-bold my-20'>No Class Joined</div>
    }

  return (
    <div>
       <div>
      <TitleText heading={`My joined classes `}></TitleText>
      <div className='grid px-10 py-5 grid-cols-1 md:grid-cols-2   gap-10'>
        {myjoinclasses?.map((singleClass, index) => (
          <div
            key={index}
            className='card overflow-hidden  dark:bg-slate-700 bg-slate-200 shadow-xl'>
            <div className='h-[400px] '>
              <img
                className='w-full h-full object-cover '
                src={singleClass?.classImage}
                alt='Shoes'
              />
            </div>
            <div className=' space-y-1 mt-2 p-5 '>
              <p className='  font-medium'>
                Trainer : {singleClass?.trainerName}
              </p>
              <p className=' font-medium'>Topic : {singleClass?.classTopic}</p>
              <p className=' font-medium'>
                Days :
                {singleClass?.classDays?.map(
                  (data, index) =>
                    data +
                    (index < singleClass?.classDays?.length - 1 ? ', ' : '.'),
                )}
              </p>

              <p className='font-bold text-lg'>
                Title : {singleClass?.classTitle?.slice(0, 50)}
              </p>
              <div className='card-actions justify-end'>
                <div className='badge badge-outline'>
                  {singleClass.classPrice}
                </div>
              </div>
              <div className=' flex gap-5 justify-center pt-4'>
                <button
                  onClick={() => navigate(`/trainerPage`)}
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

                  <span className='text-sm uppercase font-medium transition-all group-hover:ms-4'>
                    join
                  </span>
                </button>
                <button
                  onClick={()=>handleRemoveClass(singleClass._id)}
                  className='group relative inline-flex items-center overflow-hidden rounded bg-red-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500'>
                  <span className='absolute -start-full transition-all group-hover:start-4'>
                    <MdDelete className='text-2xl ' />
                  </span>

                  <span className='text-sm uppercase font-bold transition-all group-hover:ms-4'>
                    remove Class
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default MyJoinedClasses;