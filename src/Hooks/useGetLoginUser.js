import { useQuery } from "@tanstack/react-query"
import axiosSecure from "../API/axiosSecure"
import useAuth from "./useAuth"

export const useGetLoginUser =()=>{
    const {user }=useAuth()

    const {data:loginUser,refetch}=useQuery({
        queryKey:['user',user],
        queryFn:async()=>{
            const res =await axiosSecure.get(`/userInfo/${user.email}`)
          
            return res.data
        }

    })
    console.log(loginUser);
    return {loginUser,refetch}
}