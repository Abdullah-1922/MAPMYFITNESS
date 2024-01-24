import { useQuery } from "@tanstack/react-query";

import axiosSecure from "../API/axiosSecure";


const useLoadForum= ({page,size}) => {
  
 console.log(page,size,'in hook')
   const {data:forums=[],isLoading,refetch }=useQuery({
    queryKey: ['forum',page,size],
    
    queryFn: async()=>{
        const res =await axiosSecure.get(`/forums?page=${page}&size=${size}`)
        return res.data
    }
   })
   
   return {forums,isLoading,refetch}
};

export default useLoadForum;