import { useEffect, useState } from "react";
import axiosSecure from "../../../../API/axiosSecure";
import { BsCurrencyDollar } from "react-icons/bs";
import PieChart from "./States/PieChart";
import AllUsersBar from "./States/AllUsersBar";

const AdminStates = () => {
    const [userLevel,setUserLevel]=useState([])
    const [newsLetterToPremium,setNewsLetterToPremium]=useState([]) 
    const [paymentData,setPaymentData]=useState([])

    useEffect(()=>{
        axiosSecure.get('/getUserStates').then(data=>{
            console.log(data.data);
            setUserLevel(data.data)
        })
        
        axiosSecure.get('/newsToPremium').then(data=>{
            console.log(data.data);
            setNewsLetterToPremium(data.data)
        })
        axiosSecure.get('/getPaymentProfit').then(data=>{
            console.log(data.data);
            setPaymentData(data.data[0])
        })
        
    },[])
console.log(paymentData);

  return (
    <div>
    <h2 className="text-4xl font-bold text-center pb-10 lg:py-10">ADMIN STATS</h2>
    <div className=" flex justify-center  overflow-x-auto mx-auto">
    <div className="stats shadow">
  
  <div className="stat">
    <div className="stat-figure text-primary">
    <BsCurrencyDollar className="text-5xl" />
    </div>
    <div className="stat-title">Total Profit</div>
    <div className="stat-value text-primary">{paymentData?.totalPrice}</div>
    
  </div>
  
  <div className="stat">
   
    <div className="stat-title">Premium users</div>
    <div className="stat-value text-secondary">{paymentData?.uniqueUserCount}</div>
  
  </div>
  
  <div className="stat">
    <div className="stat-title text-sm">Silver to Diamond user</div> 
    <div className="stat-figure text-secondary">
     
    </div>
    <div className="stat-value">{paymentData?.userCountWithMultiplePayments}</div>
   
 
  </div>
  
</div>
    </div>
      <div className="flex flex-col lg:flex-row gap-5"> 
        <div className="lg:w-1/2  border border-black ">
        <h1 className="text-center text-3xl font-bold mt-5">User Levels</h1>
    <PieChart userLevel={userLevel}></PieChart>
        </div>
        <div className="lg:w-1/2 p-5 border border-black ">
        <h1 className="text-center text-3xl font-bold mt-5">All Users</h1>
    <AllUsersBar userData={newsLetterToPremium}></AllUsersBar>
        </div>
       
      </div>
    </div>
  );
};

export default AdminStates;