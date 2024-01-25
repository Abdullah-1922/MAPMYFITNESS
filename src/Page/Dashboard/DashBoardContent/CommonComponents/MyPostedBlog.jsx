import { useEffect, useState } from "react";
import {  myBlog } from "../../../../API/BlogApi";
import useAuth from "../../../../Hooks/useAuth";
import { MdArrowRightAlt } from "react-icons/md";
import DisplayTotalLikes from "../../../../Components/Shared/DisplayTotalLikes";
import TitleText from "../../../../Components/Shared/SmallComponents/Title/Title";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const MyPostedBlog = () => {
    const {user}=useAuth()
    const [myBlogs,setMyBlogs]=useState([])
    useEffect(()=>{
  myBlog(user?.email).then(data=>setMyBlogs(data))
    },[user?.email])
    const formattedDate = (date) => {
        return new Date(date).toLocaleDateString('en-GB');
      };
      const navigate=useNavigate()
      if(myBlogs.length===0){
        return <div className='text-center text-2xl my-20'>No Blogs Found</div>
      }
  return (
    <div className='mb-20 -mt-10'>
      <Helmet>
        <title>Community </title>
      </Helmet>
      <TitleText heading={'Community Section'}></TitleText>
      <div className='flex justify-end  my-4 mr-5'>
        <Link to={'/addBlog'}>
          <button className='btn hover:text-black  hover:bg-slate-400 bg-red-600 text-white  '>
            ADD BLOG
          </button>
        </Link>
      </div>
      <div className='grid   px-5 md:px-2 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {myBlogs.map((blog) => (
          <div key={blog?._id} className='h-[600px]  dark:border dark:border-white  overflow-y-hidden  w-full '>
            <div className='overflow-x-hidden group group-hover:scale-90 transition relative cardBg  overflow-y-hidden  px-8 py-4 rounded-2xl '>
              <div className='flex justify-between pb-1 items-center '>
                <div className='flex items-center'>
                  <div>
                    <img
                    className='w-12 h-12 mr-5 rounded-full'
                    src={blog.userProfilePic}
                    alt=''/>
                  </div>
                  
                  
                  <div>
                    <p className='text-lg font-semibold'>{blog?.name}</p>
                    <div className='text-[14px]'>
                      <p>Published on. {formattedDate(blog?.date)}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <DisplayTotalLikes id={blog?._id} />
                </div>
              </div>

              <div className='mt-6 '>
                <h3 className='font-bold pb-4 text-lg'>
                  <span>Title :</span> {blog?.title.slice(0, 60)}
                </h3>
                <div className='w-full h-[360px]  '>
                  <img
                    className='  object-cover 
                h-full 
                w-full 
               
               '
                    src={blog?.blogImage}
                    alt=''
                  />
                </div>
                <div className='mt-5 flex'>
                  <div>
                    <MdArrowRightAlt className='text-2xl '></MdArrowRightAlt>
                  </div>
                  {blog.blogDetail.slice(0, 50)}......
                </div>
              </div>
              <div className='absolute left-0 h-full w-full bg-black/30 -bottom-10 group-hover:bottom-0   flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-800'>
                <button
                  onClick={() => navigate(`/blog/${blog?._id}`)}
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

                  <span className='text-sm font-medium transition-all group-hover:ms-4'>
                    GO TO DETAILS
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      
    </div>
  );
};

export default MyPostedBlog;