import { useForm } from "react-hook-form";

const BeTrainer = () => {

    const {
        register,
        handleSubmit,
        // eslint-disable-next-line no-unused-vars
        formState: { errors },
      } = useForm();


  const onSubmit = (data) => {

  }

    return (

        <div>
           <div className="card md:w-4/5 mx-auto  w-full  dark:bg-slate-600 bg-green-100 ">
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
           
          </form>
        
        </div>
        </div>
    );
};

export default BeTrainer;