import { useQuery } from "@tanstack/react-query"
import axiosPublic from "../API/axiosPublic"


export const useBlogLikeCount =(id)=>{
    const {data :totalLikes,refetch}=useQuery({
        queryKey:['blogLikeCount',id],
        queryFn: async()=>{
          const data= await  axiosPublic(`/likeCount/${id}`)
          return data.data
        }
    })
    return {totalLikes,refetch}
}