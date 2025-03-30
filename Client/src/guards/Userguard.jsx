import { Navigate, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";

export default function GuestRoute() {
    const { isAuthenticated } = useAuth();
    console.log(isAuthenticated);
    
    if (isAuthenticated) {
        return <Navigate to="/404" />
    }

    return <Outlet />;
}