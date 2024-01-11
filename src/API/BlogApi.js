import axiosSecure from "./axiosSecure";



// Upload Blog API
export  const addBlog = async (blog) => {
  const { data } = await axiosSecure.post('/addBlog', blog)
  return data
}
 


// Get all Blog API
export const GetBlog = async () => {
  const { data } = await axiosSecure.get('/blogs')
  return data
}
 
