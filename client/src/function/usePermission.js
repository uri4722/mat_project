import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import isUser from "./isUser";
import getUser from "./getUser";

function usePermission(type) {
    const navigate = useNavigate();
    const user = getUser();

    useEffect(() => {
        if (user === null || (user.role !== type)) {
            console.log('not permission');
            navigate(type === "manager" ? "/Login" : "/userLogin")
        }
    }, [navigate, type, user])

    return getUser();
}
export default usePermission