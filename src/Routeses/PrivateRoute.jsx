import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loader}= useContext(AuthContext)
    const location = useLocation();
    if(loader){
  return <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children;
    }
    
    return <Navigate state={location.pathname} to={'/login' }></Navigate>;
       
};

export default PrivateRoute;