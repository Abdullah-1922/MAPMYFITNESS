import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useLoadBlog = () => {
   const axiosPublic =useAxiosPublic()

   const {data:blogs=[],isLoading,refetch }=useQuery({
    queryKey: ['blog'],
    queryFn: async()=>{
        const res =await axiosPublic.get('/blogs')
        return res.data
    }
   })
   return {blogs,isLoading,refetch}
};

export default useLoadBlog;