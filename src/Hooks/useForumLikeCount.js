import { useQuery } from "@tanstack/react-query"
import axiosPublic from "../API/axiosPublic"


export const useForumLikeCount =(id)=>{
 
    const {data :totalLikes,refetch}=useQuery({
        queryKey:['forumLikeCount',id],
        queryFn: async()=>{
          const data= await  axiosPublic(`/forumLikeCount/${id}`)
          return data.data
        }
    })
    return {totalLikes,refetch}
}