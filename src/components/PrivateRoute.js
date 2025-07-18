import { Navigate } from "react-router-dom";

function PrivateRoute ({children}){
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.role === "admin" ? children : <Navigate to="/"/>
}

export default PrivateRoute;