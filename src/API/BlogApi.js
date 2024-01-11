
import axiosPublic from "./axiosPublic";
import axiosSecure from "./axiosSecure";



// Upload Blog API
export  const addBlog = async (blog) => {
  const { data } = await axiosSecure.post('/addBlog', blog)
  return data
}
 


// Get all Blog API
export const getBlog = async () => {
  const { data } = await axiosPublic.get('/blogs')
  return data
}
 
// Get single Blog API 
export const getSingleBlog = async (id) => {
  const { data } = await axiosPublic.get(`/blog/${id}`)
  return data
}
 
//Like post api

export const likeApi = async (id,user) => {
  const info={
    id,email: user?.email
  }
  const { data } = await axiosSecure.put(`/like`,info)
  return data
}
 
export const unLikeApi = async (id,user) => {
  const info={
    id,email: user?.email
  }
  const { data } = await axiosSecure.put(`/unlike`,info)
  return data
}
