import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import isUser from "./isUser";
import getUser from "./getUser";

function usePermission(type) {
    const navigate = useNavigate();
    const user = getUser();
console.log(user);

    useEffect(() => {
        if (user === null || ((user.role !== type) && ( user.role !== "admin"))) {
            console.log('not permission');
            navigate("/Login")
        }
    }, [navigate, type, user])

    return getUser();
}
export default usePermission