import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function usePermission(type) {
    const user = sessionStorage.getItem(type) ?
        sessionStorage.getItem(type) :
        localStorage.getItem(type);
    const navigate = useNavigate();


    useEffect(() => {
        !user && navigate("/Login")
    }, [user, navigate])

    return JSON.parse(user);
}
export default usePermission