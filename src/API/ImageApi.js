// import axios from 'axios'



// export const imageUpload = async (image) => {
//   const formData = new FormData()
//   formData.append('image', image)
//   const { data } = await axios.post(
//     `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
//     formData
//   )
//   return data.data.display_url
// }

import axios from 'axios'



export const imageUpload = async (image) => {

  const present_key=import.meta.env.VITE_PRESENT_KEY
  const cloud_name=import.meta.env.VITE_CLOUD_NAME

  const formData = new FormData()
  formData.append('file', image)
  formData.append('upload_preset', present_key)
  const { data } = await axios.post(
    `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
    formData
  )
  return data?.secure_url
}

