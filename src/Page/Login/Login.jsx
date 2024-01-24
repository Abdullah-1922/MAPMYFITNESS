import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthContextProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";
import { Helmet } from "react-helmet-async";
const Login = () => {


  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();

  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
 
  const from = location.state?.from?.pathname || "/";
 console.log(from);
  const onSubmit = (data) => {
    console.log(data);

    const email = data.email;
    const password = data.password;
    console.log(email, password);
    signInUser(email, password)
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="  min-h-screen ">
      <Helmet><title>LOGIN</title></Helmet>
        <div className="w-fit mx-auto text-center mt-10">
        <h1 className="text-5xl  font-bold">Login now!</h1>
          <p className="py-6">
           Please login to get best experience of our website.
          </p>
        </div>
      <div className="hero-content flex flex-col md:flex-row">
        <div className="text-center md:w-1/2 lg:text-left">
         
          <div className="w-fit -mt-10 hidden md:block md: mx-auto">
            <iframe
              width={400}
              height={600}
              src="https://lottie.host/embed/7a31eb1a-484f-42da-9c92-0121b0754f2b/qjOwtO0eMj.lottie"
            ></iframe>
          </div>
        </div>
        <div className="card md:w-1/2 w-full  dark:bg-slate-600 bg-green-100 ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white">Email</span>
              </label>
              <input
                {...register("email")}
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white">Password</span>
              </label>
              <input
                {...register("password")}
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <div className="w-fit mx-auto">
              <SocialLogin link={from}></SocialLogin>
            </div>
          </form>
          <p className="w-fit  pb-4  mx-auto">
            Dont have account{" "}
            <Link className="glow" to={"/register"}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
