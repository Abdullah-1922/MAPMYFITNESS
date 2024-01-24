import { useParams } from "react-router-dom";
import { useGetJoinedStudents } from "../../../../Hooks/useGetJoinedStudents";
import { MdDelete } from 'react-icons/md';
import { deleteJoinedStudent } from "../../../../API/TrainerApi";
import { toast } from "react-toastify";


const JoinedStudents = () => {

    const {id}=useParams()
    console.log(id);
     const {joinedStudents=[],refetch}=useGetJoinedStudents(id)
     console.log(joinedStudents);
     if(joinedStudents.length===0){
        return <div className="text-center text-4xl font-bold text-red-500">No Student Join</div>
     }
     const handleDeleteStudent=(email)=>{
         const studentInfo={
            email,id
         }
         deleteJoinedStudent(studentInfo).then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                toast.success("Student removed")
                refetch()
            }
         })

       
     }
  return (
    <div>
      <div className="md:w-[80%] lg:pt-10  mx-auto">
        <h4 className="text-lg font-bold">Total student join : {joinedStudents.length}</h4>
        <div className="bg-cyan-900 font-semibold text-white p-5 rounded-3xl">
            {
                joinedStudents?.map((student,index)=> <div key={index}>
                      <div className="flex  text-lg items-center gap-3"><span>{index +1}.</span> <p>{student}</p> <MdDelete onClick={()=>handleDeleteStudent(student)} className="text-4xl hover:cursor-pointer text-red-700"></MdDelete></div>
                </div>)
            }
        </div>
      </div>
    </div>
  );
};

export default JoinedStudents;