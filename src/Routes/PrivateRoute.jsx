
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({children}) => {
 const{user,loading}=useAuth()
 console.log(user);
  const location =useLocation()
  console.log(location);

  if(loading){
    return <h1 className="text-5xl font-bold text-center text-blue-800 my-[300px]">Loading</h1>
   }
   if(!user){
    return <Navigate state={{from:location}} replace to={'/login'}></Navigate>
   }
   return children

  
};

export default PrivateRoute;