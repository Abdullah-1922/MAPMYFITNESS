import axiosPublic from "./axiosPublic"
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
//User joined classes 
export const myJoinedClasses =async(email)=>{

    const {data}=await axiosSecure.get(`/userJoinedClasses/${email}`)
    return data
}
//delete user class by class id and user email
export const deleteUserClass =async(deleteInfo)=>{
const {data}= await axiosSecure.patch('/deleteUserClass',deleteInfo)
return data
}
//get home classes
export const getHomeClasses =async()=>{
    const {data}=await axiosPublic.get('/getHomeClasses')
    return data
}