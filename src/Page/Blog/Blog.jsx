import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthContextProvider';
import { Link, useNavigate } from 'react-router-dom';
import useLoadBlog from '../../Hooks/useLoadBlog';
import { MdArrowRightAlt } from 'react-icons/md';
import TitleText from '../../Components/Shared/SmallComponents/Title/Title';
import '../../Components/Shared/SharedCss/Scrollbar.css';
import { Helmet } from 'react-helmet-async';

import './BlogCard.css';
import axiosPublic from '../../API/axiosPublic';

import DisplayTotalLikes from '../../Components/Shared/DisplayTotalLikes';
const Blog = () => {
  const [count, setCount] = useState('');
  useEffect(() => {
    axiosPublic.get('/blogsCount').then((res) => setCount(res.data.count));
  }, []);
  const formattedDate = (date) => {
    return new Date(date).toLocaleDateString('en-GB');
  };

  const [currentPage, setCurrentPage] = useState(0);
  const itemPerPage = 6;
  const numberOfPages = Math.ceil(count / itemPerPage);
  console.log(count);

  const pages = [...Array(numberOfPages).keys()];
  const { blogs, refetch, isLoading } = useLoadBlog({
    page: currentPage,
    size: itemPerPage,
  });
  // eslint-disable-next-line no-unused-vars
  const { user } = useContext(AuthContext);
  useEffect(() => {
    window.scrollTo(0, 0);
    refetch();
  }, [currentPage, refetch]);

  const navigate = useNavigate();
  console.log(isLoading);
  if (isLoading) {
    return (
      <div className='flex flex-col gap-4 w-52'>
        <div className='skeleton h-32 w-full'></div>
        <div className='skeleton h-4 w-28'></div>
        <div className='skeleton h-4 w-full'></div>
        <div className='skeleton h-4 w-full'></div>
      </div>
    );
  }
 console.log(blogs);
  return (
    <div className='mb-20'>
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
        {blogs.map((blog) => (
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

      <div className='mt-10 w-fit mx-auto'>
        <button
          onClick={() => {
            if (currentPage > 0) {
              setCurrentPage(currentPage - 1);
            }
          }}
          className='btn btn-sm bg-slate-400'>
          Prev
        </button>
        {pages?.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            className={`btn mx-1 btn-sm ${
              page == currentPage ? 'bg-orange-300' : ''
            }`}
            key={page}>
            {page + 1}
          </button>
        ))}
        <button
          onClick={() => {
            if (currentPage != numberOfPages - 1) {
              setCurrentPage(currentPage + 1);
            }
          }}
          className='btn btn-sm bg-slate-400'>
          Next
        </button>
      </div>
      {isLoading && (
        <div className='flex flex-col gap-4 w-52'>
          <div className='skeleton h-32 w-full'></div>
          <div className='skeleton h-4 w-28'></div>
          <div className='skeleton h-4 w-full'></div>
          <div className='skeleton h-4 w-full'></div>
        </div>
      )}
    </div>
  );
};

export default Blog;
