import {   useContext } from "react";
import { Navigate } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";
import { AuthContext } from "../providers/AuthProvider";
import Loading from "../Components/Loading";

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default AdminRoute;