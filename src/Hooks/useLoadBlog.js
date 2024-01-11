import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../API/axiosPublic";


const useLoadBlog = ({page,size}) => {
  
 console.log(page,size,'in hook')
   const {data:blogs=[],isLoading,refetch }=useQuery({
    queryKey: ['blog',page,size],
    
    queryFn: async()=>{
        const res =await axiosPublic.get(`/blogs?page=${page}&size=${size}`)
        return res.data
    }
   })
   
   return {blogs,isLoading,refetch}
};

export default useLoadBlog;