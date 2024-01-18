import Swal from 'sweetalert2';
import TitleText from '../../Components/Shared/SmallComponents/Title/Title';
import axiosPublic from '../../API/axiosPublic';


const NewsLetter = () => {

    const handleSubmit=e=>{
        e.preventDefault()
        console.log('submitted')
        const name =e.target.name.value
        const email =e.target.email.value
        const newsLetterSub={name,email}
        console.log(newsLetterSub);
        axiosPublic.post('/newsLetter',newsLetterSub)
        .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "Your subscribed successfully",
                    icon: "success"
                  });
            }
            console.log(res.data?.msg =='Already Subscribed')
            if(res.data?.msg =='Already Subscribed'){
                Swal.fire({
                    title: "Already Subscribed",
                    text: "You can not subscribe Twice",
                    icon: "error"
                  });
            }
        })
    }

  return (
    <div className=' blogHomeBg'>
      <TitleText heading={'Subscribe for weekly newsletter'}></TitleText>
      <form onSubmit={handleSubmit}>
        <div className='w-full py-20 '>
          <label
            className='form-control 
         mx-auto w-2/3'>
            <div className='label'>
              <span className='label-text'>Your Name</span>
            </div>
            <input
              type='text'
              placeholder='Name'
              name='name'
              required
              className='input input-bordered
           '
            />
          </label>
          <label
            className='form-control 
         mx-auto w-2/3'>
            <div className='label'>
              <span className='label-text'>Your Email</span>
            </div>
            <input
              type='email'
              name='email'
              placeholder='Email'
              required
              className='input input-bordered
             '
            />
          </label>
          <div className='w-2/3 mx-auto mt-4 '>
            <button
              type='submit'
              className='btn bg-red-600 text-white hover:text-black hover:bg-slate-400'>
              Subscribe
            </button>
          </div>
          <p className='w-2/3 mx-auto mt-2 '>
            You don`t need to login for Newsletter
          </p>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
