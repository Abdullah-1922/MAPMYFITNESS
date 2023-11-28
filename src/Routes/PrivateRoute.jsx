import { useContext } from "react";
import { AuthContext } from "../Provider/AuthContextProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
  const {user ,loading}=useContext(AuthContext)
  const location =useLocation()
  console.log(location);

  if(loading){
    return <h1 className="text-5xl font-bold text-center text-blue-800 my-[300px]">Loading</h1>
   }
   if(user){
    return children
   }
   return <Navigate state={{from:location}} replace to={'/login'}></Navigate>

  
};

export default PrivateRoute;