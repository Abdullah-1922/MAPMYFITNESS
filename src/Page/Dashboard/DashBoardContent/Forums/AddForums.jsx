import Swal from "sweetalert2";

import { imageUpload } from "../../../../API/ImageApi";
import { useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import TitleText from "../../../../Components/Shared/SmallComponents/Title/Title";
import Loader from "../../../../Components/Shared/SmallComponents/Loader";
import { useGetLoginUser } from "../../../../Hooks/useGetLoginUser";
import { addForum } from "../../../../API/forumApi";


const AddForums = () => {
    const { user } = useAuth()
   const navigate =useNavigate()
  const [selectedImage, setSelectedImage] = useState('');
  const [loading,setLoading]=useState(false)
  const {loginUser=[]}=useGetLoginUser()
  const handleForumPost =async (e) => {
    // setLoading(true)
    e.preventDefault();
    const name = user?.displayName;
    const email = user?.email;
    const ForumDetail = e.target.forum.value;
    const userProfilePic = user?.photoURL;
    const title = e.target.title.value;
    const image = e.target.image.files[0];
     const ForumImage= await imageUpload(image)
     const publisherStatus = loginUser.role ==='admin'? 'admin':'trainer'
    const date = new Date();
     console.log(ForumImage);
    const forum = { name, email, ForumDetail,publisherStatus, userProfilePic, title ,ForumImage,date};
    console.log(forum);
   try{
   const data =await addForum(forum)
      
    if (data.insertedId) {
      setLoading(false)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Forum has been published',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/blog')
      setSelectedImage('')
      e.target.reset();
    }
   }catch(err){
    console.log(err);
    setLoading(false)
   }
    
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <div className='pb-40'>
    <TitleText heading={'ADD PREMIUM FORUM'}></TitleText>
    <div>
        
      <form onSubmit={handleForumPost}>
        <div className='flex bg-blue-200 dark:bg-slate-400 rounded-xl p-5 md:p-10 w-full md:w-2/3 mx-auto  flex-col '>
            <p className="text-lg font-semibold border-b-2 border-black w-fit">You are posting as {loginUser?.role ==='admin'? 'admin':'trainer'}</p>
          <div className='form-control w-full '>
            <label className='label'>
              <span className='label-text '> Name</span>
            </label>
            <input
              type='text'
              placeholder='Name'
              readOnly
              defaultValue={user?.displayName}
              className='input input-bordered w-full o '
            />
          </div>
          <div className='form-control w-full '>
            <label className='label'>
              <span className='label-text'> Email</span>
            </label>
            <input
              type='text'
              placeholder='Email'
              readOnly
              defaultValue={user?.email}
              className='input input-bordered w-full  '
            />
          </div>
          <div className='form-control w-full '>
            <label className='label'>
              <span className='label-text'> Title</span>
            </label>
            <input
              type='text'
              placeholder='Title'
              name='title'
              required
              className='input input-bordered w-full  '
            />
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text  '>Information</span>
            </label>
            <textarea
              name='forum'
              required
              className='textarea textarea-bordered w-full   h-40'
              placeholder='Information'></textarea>
          </div>
          <div className='max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md'>
            <label
              htmlFor='image'
              className='block text-sm font-medium text-gray-700'>
              Choose an image
            </label>
            <input
              type='file'
              id='image'
              name='image'
              required={true}
              className='mt-1 p-2 border rounded-md w-full'
              onChange={handleImageChange}
            />
            {selectedImage && (
              <div className='mt-4'>
                <img
                  src={selectedImage}
                  alt='Selected'
                  className='max-w-full  max-h-[400px] rounded-md'
                />
              </div>
            )}
          </div>
          <button type='submit' disabled={loading} className='btn bg-green-300 mt-10'>{
  loading ? <Loader/> 
  : 'Add FORUM'

          }</button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default AddForums;