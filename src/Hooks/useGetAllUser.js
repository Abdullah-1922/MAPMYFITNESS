import { useQuery } from "@tanstack/react-query"
import axiosSecure from "../API/axiosSecure"

export const useGetAllUser =()=>{
    const {data:users,refetch}=useQuery({
        queryKey:['user'],
        queryFn:async()=>{
            const res =await axiosSecure.get('/getallUser')
          
            return res.data
        }

    })
    console.log(users);
    return {users,refetch}
}