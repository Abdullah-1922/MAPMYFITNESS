import { useEffect, useState } from "react";
import { getAllNewsLetterSubscriber } from "../../../../API/userApi";

const ShowNewsLetterSubscribers = () => {
  const [newsLetterSubscribers, setNewsLetterSubscribers] = useState([]);
    useEffect(()=>{
    getAllNewsLetterSubscriber().then(res=>{
      setNewsLetterSubscribers(res);
    })
     
 
    },[])
    console.log(newsLetterSubscribers);
  return (
    <div className=" md:w-4/5 mx-auto lg:px-10 pb-20 mt-10 bg-slate-300 dark:bg-black">
      <p className="text-3xl text-center py-10">NEWSLETTER SUBSCRIBER</p>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="dark:text-white">
      <tr>
        <th>index</th>
        <th>Name</th>
        <th>Email</th>
        
      </tr>
    </thead>
    <tbody>
        {
          newsLetterSubscribers?.map((subscriber,index)=>{
            return(
              <tr key={subscriber._id}>
        <th>{index+1}</th>
        <td>{subscriber.name}</td>
        <td>{subscriber.email}</td>
        
      </tr>
            )
          })
        }
     
     
     
    </tbody>
  </table>
</div>
    </div>
  );
};

export default ShowNewsLetterSubscribers;