import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoutes = () => {
    const {authToken} = useSelector((state)=>state.auth);
    const location = useLocation();
    return authToken ? (<Outlet/>) : (<Navigate to="/login" state={{from: location}} replace/>); 
}

export {
    PrivateRoutes
}