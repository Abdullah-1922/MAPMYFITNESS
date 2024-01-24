import { useQuery } from "@tanstack/react-query"

import useAuth from "./useAuth"

import axiosSecure from "../API/axiosSecure"

export const useGetLoginUser =()=>{
    const {user }=useAuth()

    const {data:loginUser,refetch,isLoading}=useQuery({
        queryKey:['user',user],
        queryFn:async()=>{
            const res =await axiosSecure.get(`/userInfo/${user?.email}`)
          
            return res.data
        }

    })
   
    return {loginUser,refetch,isLoading}
}