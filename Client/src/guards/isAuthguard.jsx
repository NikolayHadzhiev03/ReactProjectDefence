import { Navigate, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";

export default function IsAuthguard() {
    const { isAuthenticated } = useAuth();

    
    if (!isAuthenticated) {
        return <Navigate to="/404" />
    }

    return <Outlet />;
}