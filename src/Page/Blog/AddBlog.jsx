import { useContext } from "react";
import TitleText from "../../Components/Shared/SmallComponents/Title/Title";
import { AuthContext } from "../../Provider/AuthContextProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddBlog = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const handlePostBlog = (e) => {
    e.preventDefault();
    const name = user?.displayName;
    const email = user?.email;
    const blogDetail = e.target.blog.value;
    const userProfilePic = user?.photoURL;
    const title =e.target.title.value;
    const blog = { name, email, blogDetail ,userProfilePic,title};
    console.log(blog);
    axiosSecure.post("/blogs", blog).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
       
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Blog has been published",
          showConfirmButton: false,
          timer: 1500,
        });

        e.target.reset();
      }
    });
  };
  return (
    <div className="pb-40">
      <TitleText heading={"ADD YOUR BLOG"}></TitleText>
      <div>
        <form onSubmit={handlePostBlog}>
          <div className="flex bg-slate-400 rounded-xl p-5 md:p-10 w-full md:w-2/3 mx-auto  flex-col ">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text "> Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                readOnly
                defaultValue={user?.displayName}
                className="input input-bordered w-full o "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text"> Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                readOnly
                defaultValue={user?.email}
                className="input input-bordered w-full  "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text"> Title</span>
              </label>
              <input
                type="text"
                placeholder="Title"
              name="title"
              required
                className="input input-bordered w-full  "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  ">Information</span>
              </label>
              <textarea
                name="blog"
                required
                className="textarea textarea-bordered w-full   h-40"
                placeholder="Information"
              ></textarea>
            </div>

            <button className="btn bg-green-300 mt-10">ADD</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
