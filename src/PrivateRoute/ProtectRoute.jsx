import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../Components/Loading";

const ProtectRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);

    if(user){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    return <Navigate to="/login"></Navigate>
};

export default ProtectRoute;