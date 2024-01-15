/* eslint-disable react/no-unknown-property */
import { Link, useNavigate } from 'react-router-dom';
import TitleText from '../../Components/Shared/SmallComponents/Title/Title';
import '../Home/BlogHome.css';
import { useEffect, useState } from 'react';
import axiosPublic from '../../API/axiosPublic';
import { MdArrowRightAlt } from 'react-icons/md';
import DisplayTotalLikes from '../../Components/Shared/DisplayTotalLikes';
import { motion } from 'framer-motion';
const BlogHome = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axiosPublic('/homeblog').then((data) => {
      setBlogs(data.data);
    });
  }, []);
  const formattedDate = (date) => {
    return new Date(date).toLocaleDateString('en-GB');
  };
  const navigate = useNavigate();
  return (
    <div className='pb-20 overflow-hidden'>
      <TitleText heading={'Highlights of recent Community'}></TitleText>
      <div className='flex p-5 flex-col   '>
        <div className='pb-5 w-fit mx-auto'>
          <p className='text-xl font-semibold '>
            Visit our community to get articles related to fitness, nutrition,
            and exercise.
          </p>
          <div className='w-fit mx-auto'>
            <Link to={'/blog'}>
              <button className='btn hover:text-black  hover:bg-slate-400 mt-5  bg-red-500 text-white'>
                See Blogs
              </button>
            </Link>
          </div>
        </div>
        <div className='grid   px-5 md:px-2 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 '>
          {blogs.map((blog,index) => (
            <motion.div
            initial={{ x: index % 2 === 0 ? -150 : 150, y: 0, opacity: 0 }}
            whileInView={{opacity:1,x:0,y:0}}
            
            exit={{x:-150,opacity:0}}
            transition={{ duration: .6 }}
              key={blog?._id}
             >
              <div className='h-[600px] overflow-y-hidden  w-full  overflow-x-hidden group group-hover:scale-90 transition relative cardBg   px-8 py-4 rounded-2xl border-2  '>
                <div className='flex justify-between border-b border-black pb-1 items-center '>
                  <div className='flex items-center'>
                    <img
                      className='w-12 h-12 mr-5 rounded-full'
                      src={blog?.userProfilePic}
                      alt=''
                    />
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
                <div className='absolute left-0 h-full w-full bg-black/30 -bottom-10 group-hover:bottom-0   flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300'>
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
                      {' '}
                      GO TO DETAILS{' '}
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
