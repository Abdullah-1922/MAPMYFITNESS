
import axiosSecure from "./axiosSecure";

//get a login user info
export const getUserInfo =async(email)=>{
    try {
        const {data} = await axiosSecure(`/userInfo/${email}`)
        return data;
    } catch (error){
        console.log(error);
    }
}
//delete  a user
export const deleteAnUser =async(email)=>{
    try {
        const {data} = await axiosSecure.delete(`/deleteUser/${email}`)
        console.log(data);
        return data;
    } catch (error){
        console.log(error);
    }
}
// make user admin 
export const makeAdmin =async(email)=>{
    try {
        const {data} = await axiosSecure.put(`/makeUserAdmin/${email}`)
        console.log(data);
        return data;
    } catch (error){
        console.log(error);
    }
}
// make user trainer 
export const makeTrainer =async(email)=>{
    try {
        const {data} = await axiosSecure.put(`/makeUserTrainer/${email}`)
        console.log(data);
        return data;
    } catch (error){
        console.log(error);
    }
}
// reject Trainer application
export const rejectTrainer =async(email)=>{
    try {
        const {data} = await axiosSecure.put(`/rejectTrainer/${email}`)
        console.log(data);
        return data;
    } catch (error){
        console.log(error);
    }
}
// make user trainer 
export const makeTrainerPending =async(email)=>{
    try {
        const {data} = await axiosSecure.put(`/makeTrainerPending/${email}`)
        console.log(data);
        return data;
    } catch (error){
        console.log(error);
    }
}


