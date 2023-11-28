import TitleText from "../../Components/Shared/SmallComponents/Title/Title";

const NewsLetter = () => {
  return (
    <div className=''>
       <TitleText  heading={'Subscribe for weekly newsletter'}></TitleText>
      <form>
        <div className="w-full py-10 ">
             <label
          className='form-control 
         mx-auto w-2/3'>
          <div className='label'>
            <span className='label-text'>Your Name</span>
          </div>
          <input
            type='text'
            placeholder='Name'
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
            type='text'
            placeholder='Email'
            required
            className='input input-bordered
             '
          />
        </label>
        <div className="w-2/3 mx-auto mt-4 "><button type="submit" className="btn bg-red-600 text-white hover:text-black hover:bg-slate-400">Subscribe</button></div>
        <p className="w-2/3 mx-auto mt-2 ">You don't need to login for Newsletter</p>
        </div>
        
      </form>
    </div>
  );
};

export default NewsLetter;
