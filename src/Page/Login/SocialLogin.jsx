import { FaGoogle } from "react-icons/fa6";

import { useContext } from "react";

// import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthContextProvider";

const SocialLogin = ({link}) => {
  const { googleSignIn } = useContext(AuthContext);
  // const axiosPublic =useAxiosPublic()
  const navigate =useNavigate()
  const handleGoogleLogin = () => {
    googleSignIn()
    .then((res) => {console.log(res)
      navigate(link)
    // const userInfo ={
    //     email :res.user?.email,
    //     name :res.user?.displayName,
    // }
    // axiosPublic.post('/users',userInfo)
    // .then(res=>{
    //     console.log(res.data);
    //     navigate(link)
    // })
    });
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
