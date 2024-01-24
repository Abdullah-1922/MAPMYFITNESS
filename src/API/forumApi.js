

import axiosSecure from "./axiosSecure"

//add  forum in database
export const addForum =async(data)=>{
    const {data:res} =await axiosSecure.post('/addForum',data)
    return res
}
//get single forum
// Get single Blog API 
export const getSingleForum = async (id) => {
    const { data } = await axiosSecure.get(`/forum/${id}`)
    return data
  }



//Like post api

export const ForumLikeApi = async (id,user) => {
    const info={
      id,email: user?.email
    }
    const { data } = await axiosSecure.put(`/forumLike`,info)
    return data
  }
   
  export const ForumUnLikeApi = async (id,user) => {
    const info={
      id,email: user?.email
    }
    const { data } = await axiosSecure.put(`/forumUnlike`,info)
    return data
  }
  