
import { useGetLoginUser } from "./useGetLoginUser"

export const useGetUSerStatus =()=>{
    const {loginUser}=useGetLoginUser()
    console.log(loginUser);
     const status =loginUser?.userStatus
     console.log(status);
     return {status}
}