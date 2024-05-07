import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/Authprovider";
import Bookingsrow from "./Bookingsrow";
// import axios from "axios";
import useAxiosSecure from "../../Hook/useAxiosSecure";



const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  console.log(bookings);
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure()

// const uri = `http://localhost:5000/bookings?email=${user.email}`
const uri = `/bookings?email=${user.email}`
  useEffect(() => {
    axiosSecure.get(uri)
    .then(res => {setBookings(res.data)})
    // fetch(uri)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setBookings(data);
    //   });

    // axios.get(uri,{withCredentials:true})
    // .then(res =>{
    //   setBookings(res.data)
    // })
    
  },[uri,axiosSecure]);

  const handleDelete=(_id)=>{
    const procced =confirm("Are You sure to Delete !")
    if (procced){
      fetch(`http://localhost:5000/bookings/${_id}`,{
        method:"DELETE",
      
      })
      .then(res => res.json())
      .then(data=> {
        console.log(data);
        if(data.deletedCount > 0){
          alert('Deleted successfully')
          const remaining  = bookings.filter(booking => booking._id !== _id)
          setBookings( remaining )
        }
      })
    }

  }

  const handleConfirm = _id =>{
    fetch(`http://localhost:5000/bookings/${_id}`,{
      method:"PATCH",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({status:'confirm'})
    })
    .then(res => res.json())
.then(data => {
  console.log(data); 
  if(data.modifiedCount > 0){
    // updated
    const remaining = bookings.filter(booking=> booking._id !== _id);

    const updated = bookings.find( booking => booking._id === _id)
    updated.status='confirm';
   const  newBookings=[updated, ...remaining];
   setBookings(newBookings)
  }
})
  }
  return (
    <div>
      <h1>{bookings.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
               
              </th>
              <th>Name</th>
              <th>Service</th>
              <th>Price</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
         {
            bookings.map(booking=><Bookingsrow key={booking._id} booking={booking} handleConfirm={handleConfirm} handleDelete={handleDelete}></Bookingsrow>)
         }
    
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default Bookings;
