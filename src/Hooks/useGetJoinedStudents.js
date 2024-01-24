import { useQuery } from "@tanstack/react-query"
import axiosSecure from "../API/axiosSecure"

export const useGetJoinedStudents = (id) => {
 const {data:joinedStudents,refetch}=useQuery({
    queryKey:['JoinedStudents'],
queryFn:async()=>{
        const res =await axiosSecure.get(`/joinedStudents/${id}`)
        return res.data
} 
 })
 return {joinedStudents,refetch}

}