import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleBlog, likeApi, unLikeApi } from '../../API/BlogApi';
import { PiHeartStraightFill } from 'react-icons/pi';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../Hooks/useAuth';
import { useBlogLikeCount } from '../../Hooks/useBlogLikeCount';
import {  toast } from 'react-toastify';
import axiosPublic from '../../API/axiosPublic';
const BlogDetails = () => {
  const { id } = useParams();
  const {user}=useAuth()
  const [like,setLike]=useState(false)
 
  const [data, setData] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const data = await getSingleBlog(id);
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);
  
  const {totalLikes,refetch}=  useBlogLikeCount(id)
 
  
 const addLike =async(id)=>{
    if(!user){
        return toast("Please Login First", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: false,
            theme: "light",
            } )
    }
   const data =await likeApi(id,user)
   setLike(true)
   refetch()
   console.log(data);
 }
 const removeLike =async(id)=>{
    if(!user){
        return toast("Please Login First", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: false,
            theme: "light",
            } )
    }
   const data =await unLikeApi(id,user)
   setLike(false)
   refetch()
   console.log(data);
 }

useEffect(()=>{
   axiosPublic.get(`/checkLike/${id}?email=${user?.email}`).then(data=>{
    console.log(data.data);
    if(data.data){
        setLike(true)
    }else{
        setLike(false)
    }
   }
    
    )
  
},[id,user])


  return (
    <div className='w-[90%] mx-auto pb-48'>
        <Helmet>
            <title>POST DETAILS</title>
        </Helmet>
        <div className='flex md:w-[90%] mx-auto items-center justify-between '>
      <div className='flex items-center py-5 gap-6'>
        <img
          className='w-14 h-14 rounded-full '
          src={data?.userProfilePic}
          alt=''
        />
        <div>
          <h1>{data?.name}</h1>
          <p>{new Date(data?.date).toLocaleDateString('en-GB')}</p>
        </div>
      </div>
      <div className=' flex items-center'>
      {
        like ?    <button  onClick={()=>removeLike(id)} ><PiHeartStraightFill className='text-4xl text-purple-700'/></button> 
        :
        <button onClick={()=>addLike(id)} ><PiHeartStraightFill className='text-4xl'/></button> 
       
      }
     <p className='text-xl p-1 px-2 border bg-violet-300 rounded-3xl ml-2'> like : {totalLikes ? totalLikes: '0'} </p>
     
      </div>
      
      </div>
      <div>
        <div className='md:w-[90%] mx-auto h-[300px] sm:h-[350px] md:h-[400px] lg:h-[550px]'>
          <img className='w-full h-full' src={data?.blogImage} alt='' />
        </div>
      </div>
      <h1 className='text-2xl p-4 pt-10 font-bold'>{data?.title}</h1>
      <p>{data?.blogDetail}</p>
    </div>
  );
};

export default BlogDetails;
