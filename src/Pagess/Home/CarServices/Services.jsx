// import { useEffect } from "react";
// import { useState } from "react";
import useServices from "../../../Hook/useServices";
import Servicecard from "./Servicecard";



const Services = () => {

    const services = useServices()
    console.log(services);
    // const [services,SetServices]=useState([])

    // useEffect(()=>{
    //     fetch('services.json')
    //     .then(res => res.json())
    //     .then(data=>{
    //         SetServices(data)
    //     })
    // },[])
    return (
        <div className="">
                
                <div className="space-y-3 text-center">
                <h1 className="text-2xl font-bold text-orange-500">Services</h1>
                <h1 className="text-5xl font-bold">Our Services</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
                {
                    services.map(service =><Servicecard key={service._id} service={service}></Servicecard>)
                }
         
                </div>
                
            </div>
    );
};

export default Services;