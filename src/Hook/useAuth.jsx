import { useContext } from "react";
import { AuthContext } from "../../src/Providers/Authprovider";


const useAuth = () => {
    const auth =  useContext(AuthContext)
        return auth;
};

export default useAuth;