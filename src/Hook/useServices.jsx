import { useEffect, useState } from "react";


const useServices = () => {

    const [services,setSrvices]=useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data=> {setSrvices(data)})
    },[])
    return services;
}

export default useServices;