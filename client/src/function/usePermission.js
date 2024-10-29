import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getUser from "./getUser";

function usePermission(level) {
    const LEVELS = ["user","manager" ,"admin"];
    const navigate = useNavigate();
    const user = getUser();



    useEffect(() => {
        if (user === null || ((LEVELS.indexOf(user.role) < LEVELS.indexOf(level) ))) {
            console.log('not permission');
            navigate("/Login")
        }
    }, [navigate, level, user])

    return getUser();
}
export default usePermission