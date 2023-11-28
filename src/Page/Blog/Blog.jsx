import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContextProvider";
import { Link } from "react-router-dom";
import useLoadBlog from "../../Hooks/useLoadBlog";
import { MdArrowRightAlt } from "react-icons/md";
import TitleText from "../../Components/Shared/SmallComponents/Title/Title";
import '../../Components/Shared/SharedCss/Scrollbar.css'

const Blog = () => {
 // eslint-disable-next-line no-unused-vars
 const {user} =useContext(AuthContext)
 const {blogs}=useLoadBlog()
 console.log(blogs);
  return (
    <div className="mb-20">
      <TitleText heading={'Community Section'}></TitleText>
        <div className="flex justify-end my-4 mr-5">
       <Link to={'/addBlog'}> <button  className="btn hover:text-black  hover:bg-slate-400 bg-red-600 text-white  ">ADD BLOG</button></Link>

        </div>
        <div className="grid px-5 md:px-2 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
         {
          blogs.map((blog)=> <div className="h-[400px]  overflow-y-auto p-5 rounded-2xl border-2 border-black" key={blog._id}>
           <img className="w-16 h-16 mx-auto rounded-full" src={blog.userProfilePic} alt="" />
           <div className="text-center">
            <p className="text-lg font-semibold">{blog.name}</p>
            <p>{blog.email}</p>
           </div>
           <div className="mt-6 ">
            <h3 className="font-bold"><span>Title :</span> {blog.title}</h3>
            <p className="mt-5 flex"> <div ><MdArrowRightAlt className="text-2xl "></MdArrowRightAlt></div>  {blog.blogDetail}</p>
           </div>
        </div>)
         }
        </div>
      
    </div>
  );
};

export default Blog;