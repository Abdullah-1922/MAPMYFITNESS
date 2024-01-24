
import axiosSecure from "./axiosSecure"

export const getToken = async email => {
  const { data } = await axiosSecure.post(`/jwt`, { email })
  console.log('Token received from server------>', data)
  return data
}

// Clear token from browser
export const clearCookie = async () => {
  const { data } = await axiosSecure.get('/logout')
  return data
}
//get login user 
export const getLoginUser = async () => {
  
  const { data } = await axiosSecure.get('/user')
  return data
}