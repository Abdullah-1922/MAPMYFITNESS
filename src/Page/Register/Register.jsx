import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthContextProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../Login/SocialLogin";


const Register = () => {
    
  const { createUser,updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
   
    formState: { errors },
  } = useForm()

const navigate=useNavigate()
  const axiosPublic = useAxiosPublic()
  const onSubmit = (data) =>{
     console.log(data)
  createUser(data.email,data.password)
  .then(res=>{
    const loggedUser =res.user
    console.log(loggedUser);
    updateUserProfile(data.name,data.photoUrl)
    .then(( )=>{
        // create user entry in database
     const userInfo ={
      name:data.name,
      email:data.email,
     }
    axiosPublic.post('/users',userInfo)
    .then(res=>{
      console.log(res.data);
      if(res.data.insertedId){
        console.log('user added to database');
          reset();
      Swal.fire({
        title: "User SignUp successfully",
        text: "you can access all services",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      
      });
      navigate("/")

      }
    })

      
    
    })
    .catch(err=>console.log(err))
  })
  
  }
    return (
        <div className="dark:bg-slate-800">
        <Helmet>
          <title>MAPMYFITNESS | SignUp</title>
        </Helmet>
         <div className="hero min-h-screen ">
          <div className="hero-content flex flex-col md:flex-row">
            <div className="text-center   lg:text-left">
              <h1 className="text-5xl font-bold">Sign Up now!</h1>
              <p className="py-6">
                Sign up to get access to all the features of MAPMYFITNESS.

              </p>
            </div>
            <div className="card w-full  dark:bg-slate-600 bg-green-100">
              <form   onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...register("name", { required: true, minLength: 3})}
                    placeholder="name"
                    className="input input-bordered"
                  
                  />
                    {errors.name && <span className="text-red-700 my-2">This field is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PhotoUrl</span>
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
                    {...register("photoUrl", { required: true})}
                    placeholder="photoUrl"
                    className="input input-bordered"
                  
                  />
                    {errors.photoUrl && <span className="text-red-700 my-2">Photo URL is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email")}
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    {...register("password", { required:true ,
                       minLength: 6,
                       maxLength:20,
                       pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@ /$!%*?&]{6,20}/
                      })}
                    placeholder="password"
                    className="input input-bordered"
                   
                  />
                  {errors.password?.type === 'minLength' && <span className="text-red-700 my-2">password must be 6 Characters</span>}
                  {errors.password?.type === 'maxLength' && <span className="text-red-700 my-2">password must be less then 20 Characters</span>}
                  {errors.password?.type === 'pattern' && <span className="text-red-700 my-2">password must one uppercase ,one lowercase,one special character, one number</span>}
                 
                </div>
    
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
                <div className="w-fit mx-auto">
                  <SocialLogin></SocialLogin>
                  
                </div>
              </form>
              <p  className="w-fit dark:text-black pb-4 mx-auto">
                Have an account <Link to={"/login"} className="text-red-500 font-bold">Login</Link>
              </p>
            </div>
          </div>
        </div>
       </div>
    );
};

export default Register;