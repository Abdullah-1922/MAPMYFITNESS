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
export const getTrainer = async(email)=>{
    const {data} =await axiosSecure.get(`/getTrainer/${email}`)
    return data
}