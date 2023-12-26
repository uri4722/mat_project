import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useManagerPermission() {
    const manager = sessionStorage.getItem("manager") ?
        sessionStorage.getItem("manager") :
        localStorage.getItem("manager");
    const navigate = useNavigate();


    useEffect(() => {
        !manager && navigate("/Login")
    }, [manager, navigate])

    return manager;
}
export default useManagerPermission