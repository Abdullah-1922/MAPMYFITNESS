import axiosSecure from "./axiosSecure";

export const createPaymentIntent=async(price)=>{
    const {data}=await axiosSecure.post('/createPaymentIntent',price)
    return data
}
//save payment info

export const paymentInfoSave=async(paymentInfo)=>{
    const {data}=await axiosSecure.post('/payment',paymentInfo)
    return data


}
//update user status
export const updateUserStatus=async(userStatusInfo)=>{
    const {data}=await axiosSecure.patch('/updateUserStatus',userStatusInfo)
    return data


}