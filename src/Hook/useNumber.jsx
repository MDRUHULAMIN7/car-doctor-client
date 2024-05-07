import axios from "axios";
import { useEffect, useState } from "react";


const useNumber = () => {
    const [Number,setNumber]=useState(0);
    useEffect(()=>{
        axios.get('/getNumber')
        .then(res=>{
            setNumber(res.data)
        })
    },[])
    return  Number;

};

export default useNumber;