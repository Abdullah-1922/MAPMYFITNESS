import { useEffect, useState } from "react";
import { getAllPaymentUsers } from "../../../../API/Payment";
import TitleText from "../../../../Components/Shared/SmallComponents/Title/Title";

const AllPaymentUsers = () => {

    const [users, setUsers] = useState([]);
    useEffect(()=>{
      getAllPaymentUsers().then(data=>{
        setUsers(data)
    })   
    },[])
   
 console.log(users);
  return (
    <div className="md:w-[90%] lg:w-[80%] mx-auto">
      <div className="overflow-x-auto">
        <TitleText heading={'ALL PAYMENT HISTORY'}></TitleText>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>packageName</th>
        <th>PackagePrice</th>
        <th>transactionId</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
     {
        users?.map((user,index)=> <tr key={index}>
        <th>{index + 1}</th>
        <td>{user?.userEmail}</td>
        <td className="uppercase">{user?.packageName}</td>
        <td className="uppercase">{user?.packagePrice}</td>
        <td className="uppercase">{user?.transactionId}</td>
        <td className="uppercase">{new Date(user?.date).toLocaleDateString('en-GB')}</td>
       
       
      </tr>)
     }
     
    
    </tbody>
  </table>
</div>
    </div>
  );
};

export default AllPaymentUsers;