import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import isUser from "./isUser";
import getUser from "./getUser";

function usePermission(type) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isUser(type)) navigate(type === "manager" ? "/Login" : "/userLogin")
    }, [navigate])

    return getUser(type);
}
export default usePermission