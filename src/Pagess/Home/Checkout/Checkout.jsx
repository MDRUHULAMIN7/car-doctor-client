import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Providers/Authprovider";


const Checkout = () => {

    const service = useLoaderData();
    const{user}=useContext(AuthContext)
    console.log(service);
    const{_id,title, price,img}=service

    const handlecheckoutservice=event=>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email =  form.email.value;
        const date = form.date.value
        const phone  = form.phone.value;
        const bookings={customername:name,email:email,image:img,date:date,phone:phone,service_id:_id,service:title,
        price:price}
        console.log(bookings);
        event.target.reset()
    
        fetch("http://localhost:5000/bookings",{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(bookings)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
              alert('Oredr book successfully')
             
            }
        })
    }

    // const {title}=service;
    return (
        <div>
            <h2 className="text-center text-3xl  my-3">check out:{service.title}</h2>

            <div className="mx-auto bg-gradient-to-rfrom-[#151515] to-[rgba(21,21,21,0)]">
                <img className="h-80 w-full rounded-xl " src={service.img} alt="" />
            </div>

            <div className=" w-5/6 md:px-20 px-5 shadow-2xl mx-auto mt-10 bg-base-300 py-20 rounded-xl mb-10">
   <form onSubmit={handlecheckoutservice} className=" grid md:grid-cols-2 col-span-1 gap-5">

     <div className="form-control w-full">
       <label className="label">
         <span className="label-text"> Name</span>
       </label>
       <input type="text" name="name" placeholder=" Name" className="w-full input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Date</span>
       </label>
       <input type="date" name="date" placeholder="date" className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Email</span>
       </label> 
       <input type="email" placeholder="Email" defaultValue={user?.email} name="email" className="input input-bordered" required />
   
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Phone</span>
       </label>
       <input type="text" placeholder="phone" name="phone" className="input input-bordered" required />
   
     </div>
     <div className="form-control md:col-span-2 col-span-1">
       <label className="label">
         <span className="label-text">Your Message</span>
       </label>
      <textarea name="write your message" id="" cols="30" rows="5"></textarea>
   
     </div>
     <div className="form-control mt-6 md:col-span-2 col-span-1">
     

       <button className="btn w-full bg-orange-600"><input type="submit" value="Order Confirm" /></button>
     </div>
   </form>
 </div>
        </div>
    );
};

export default Checkout;