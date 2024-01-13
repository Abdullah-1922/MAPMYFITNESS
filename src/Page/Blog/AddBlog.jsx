import { useContext, useState } from 'react';
import TitleText from '../../Components/Shared/SmallComponents/Title/Title';
import { AuthContext } from '../../Provider/AuthContextProvider';

import Swal from 'sweetalert2';
import { imageUpload } from '../../API/ImageApi';
import { addBlog } from '../../API/BlogApi';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Components/Shared/SmallComponents/Loader';



const AddBlog = () => {
  const { user } = useContext(AuthContext);
   const navigate =useNavigate()
  const [selectedImage, setSelectedImage] = useState('');
  const [loading,setLoading]=useState(false)
  const handlePostBlog =async (e) => {
    setLoading(true)
    e.preventDefault();
    const name = user?.displayName;
    const email = user?.email;
    const blogDetail = e.target.blog.value;
    const userProfilePic = user?.photoURL;
    const title = e.target.title.value;
    const image = e.target.image.files[0];
     const blogImage= await imageUpload(image)
    const date = new Date();
     console.log(blogImage);
    const blog = { name, email, blogDetail, userProfilePic, title ,blogImage,date};
    
   try{
   const data =await addBlog(blog)
      
    if (data.insertedId) {
      setLoading(false)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Blog has been published',
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
      <TitleText heading={'ADD YOUR BLOG'}></TitleText>
      <div>
        <form onSubmit={handlePostBlog}>
          <div className='flex bg-slate-400 rounded-xl p-5 md:p-10 w-full md:w-2/3 mx-auto  flex-col '>
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
                name='blog'
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
    : 'Add Blog'

            }</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
