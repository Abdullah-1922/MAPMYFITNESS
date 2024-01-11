import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useLoadBlog = ({page,size}) => {
   const axiosPublic =useAxiosPublic()
 console.log(page,size,'in hook;')
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