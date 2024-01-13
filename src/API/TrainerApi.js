import axiosSecure from "./axiosSecure"


export const addTrainer =async(trainer)=>{
    const {data} =await axiosSecure.post('/addTrainer',trainer)
    return data
}