
import { useGetLoginUser } from "./useGetLoginUser"

export const useGetUSerStatus =()=>{
    const {loginUser}=useGetLoginUser()
     const status =loginUser?.userStatus
     return {status}
}