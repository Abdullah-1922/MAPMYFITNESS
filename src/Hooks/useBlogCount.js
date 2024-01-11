import useAxiosPublic from "./useAxiosPublic";

const useBlogCount =async () => {
    
   const axiosPublic=useAxiosPublic()
 
    const res =await axiosPublic.get('/blogsCount')
    console.log(res.data);
    return res.data.count
   
   

};

export default useBlogCount;