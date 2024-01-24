import axiosPublic from "../API/axiosPublic";


const useBlogCount =async () => {
    
  
 
    const res =await axiosPublic.get('/blogsCount')
    console.log(res.data);
    return res.data.count
   
   

};

export default useBlogCount;