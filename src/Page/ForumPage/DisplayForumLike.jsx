import { useForumLikeCount } from "../../Hooks/useForumLikeCount";

const DisplayForumLike = (id) => {
     console.log(id);
    const {totalLikes}=  useForumLikeCount(id.id)
  return (
    <p className='text-xl p-1 px-2 border bg-violet-300 rounded-3xl ml-2'> like : {totalLikes ? totalLikes: '0'} </p>
  );
};

export default DisplayForumLike;