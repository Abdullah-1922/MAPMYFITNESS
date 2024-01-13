import { useBlogLikeCount } from "../../Hooks/useBlogLikeCount";

const DisplayTotalLikes =(id) => {
     const blogId =id.id

    const {totalLikes}=  useBlogLikeCount(blogId)
    
  return (
    <div>
       <p className='text-xl text-center font-semibold p-1 px-2 border bg-violet-300 rounded-3xl '> like : {totalLikes ? totalLikes: '0'} </p>
    </div>
  );
};

export default DisplayTotalLikes;