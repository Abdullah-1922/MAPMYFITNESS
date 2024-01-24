import { useQuery } from "@tanstack/react-query"
import axiosSecure from "../API/axiosSecure"

export const useGetAllUser =()=>{
    const {data:users=[],isLoading}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res =await axiosSecure.get('/getallUser')
            console.log(res);
            return res.data
        }

    })
    console.log(users);
    return {users,isLoading}
}