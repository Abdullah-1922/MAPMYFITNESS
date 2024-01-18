import axiosSecure from "./axiosSecure"

// add class
export const addClass =async (classInfo)=>{
    const { data } = await axiosSecure.post('/addClass', classInfo)
    return data
}
// get class info by id 
export const getClassInfo =async (id)=>{
const {data}=await axiosSecure.get(`/getClassInfo/${id}`)
return data
}