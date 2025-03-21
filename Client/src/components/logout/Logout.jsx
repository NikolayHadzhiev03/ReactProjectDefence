import { Navigate } from "react-router";
import { useLogout } from "../../api/authapi";

export default function Logout() {
    const { isLoggedOut } = useLogout()

    return isLoggedOut
        ? <Navigate to="/" />
        : null; 
}