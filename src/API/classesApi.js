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


// user join classes . 
export const joinClasses =async(email,id)=>{
    const {data}=await axiosSecure.patch('/joinClasses',{email,id})
    return data
}