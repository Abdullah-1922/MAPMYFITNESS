import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContextProvider";
import { Link } from "react-router-dom";
import useLoadBlog from "../../Hooks/useLoadBlog";


const Blog = () => {
 // eslint-disable-next-line no-unused-vars
 const {user} =useContext(AuthContext)
 const {blogs}=useLoadBlog()
 console.log(blogs);
  return (
    <div>
        <div>
       <Link to={'/addBlog'}> <button >ADD POST</button></Link>

        </div>
        <div className="grid px-5 md:px-2 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
         {
          blogs.map((blog)=> <div className="h-[400px] p-5 rounded-2xl bg-slate-200" key={blog._id}>
           <img className="w-16 h-16 mx-auto rounded-full" src={blog.userProfilePic} alt="" />
           <div className="text-center">
            <p className="text-lg font-semibold">{blog.name}</p>
            <p>{blog.email}</p>
           </div>
           <div>
            <h3><span className="font-bold">Title :</span> {blog.title}</h3>
            <p>{blog.blogDetail}</p>
           </div>
        </div>)
         }
        </div>
      
    </div>
  );
};

export default Blog;