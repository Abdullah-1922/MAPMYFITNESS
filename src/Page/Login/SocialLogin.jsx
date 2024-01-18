import { FaGoogle } from "react-icons/fa6";



import { useNavigate } from "react-router-dom";

import useAuth from "../../Hooks/useAuth";
import axiosPublic from "../../API/axiosPublic";
import Swal from "sweetalert2";

const SocialLogin = ({link}) => {
  const { googleSignIn } = useAuth()
  console.log(link);
 
  const navigate =useNavigate()
  const handleGoogleLogin =async () => {
  const user = await googleSignIn()
 const data= user.user
   const userData ={
    email: data.email,
    role: 'user',
    userFrom : new Date(),
    lastLogin : new Date(),
    userName : data.displayname,
    userPhoto : data.photoURL
    ,
    trainerStatus: 'not applied'
   }
   console.log(userData);

try{
   const res =  await  axiosPublic.put(`/users/${data.email}`,userData)
   console.log(res);
      
console.log(res.data);
if(res.data){

  
Swal.fire({
  title: " login successfully",
  text: "you can access all services",
  icon: "success",
  showConfirmButton: false,
  timer: 1500,

});

navigate(`${link}`)

}


}catch(error){
  console.log(error);
}

  };
  
  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        type="button"
        className="text-white  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
      >
        <FaGoogle className="w-4 h-4 mr-2 text-red-400"></FaGoogle>
        <span className="glow font-semibold">Sign in with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
