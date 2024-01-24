import axiosSecure from "./axiosSecure"

//add trainer
export const addTrainer =async(trainer)=>{
    const {data} =await axiosSecure.post('/addTrainer',trainer)
    return data
}
// get trainer for home page
export const homePageTrainer =async()=>{
    const {data} =await axiosSecure.get('/homePageTrainer')
    return data
}
export const getTrainer = async(id)=>{
    const {data} =await axiosSecure.get(`/getTrainer/${id}`)
    return data
}
export const getLoginTrainer = async(email)=>{
    const {data} =await axiosSecure.get(`/getLoginTrainer/${email}`)
    console.log(data);
    return data
}
//delete an class student 
export const deleteJoinedStudent = async(data)=>{
    const {data:res} =await axiosSecure.patch('/deleteJoinedStudent',data)
    return res
}
