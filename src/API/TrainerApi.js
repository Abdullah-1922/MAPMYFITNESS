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
//add  forum in database
export const addForum =async(data)=>{
    const {data:res} =await axiosSecure.post('/addForum',data)
    return res
}
