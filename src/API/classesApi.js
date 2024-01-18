import axiosSecure from "./axiosSecure"

// add class
export const addClass =async classInfo=>{
    const { data } = await axiosSecure.post('/addClass', classInfo)
    return data
}