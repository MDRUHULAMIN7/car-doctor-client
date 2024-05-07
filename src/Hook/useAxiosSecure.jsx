import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure =  axios.create({
    baseURL:'http://localhost:5000',
    withCredentials:true
})

const useAxiosSecure = () => {

    const{logout}= useAuth();
    const navigate = useNavigate()
 useEffect(()=>{
    axiosSecure.interceptors.response.use(res=>{
        return res
    }
    ,error=>{
        console.log('error',error.response);
        if(error.interceptors.status === 401 || error.interceptors.status === 403){
            console.log('logout the user');
            logout()
            .then(()=>{
                axios.get('http://localhost:5000/logout',{
                    withCredentials:true
                })
              .then(()=>{
                navigate('/login')
              })
             
            })
            .catch(error=>{
              console.error(error)
            })
        }
    }
)
 },[logout,navigate])
    
    return axiosSecure
}

export default useAxiosSecure;