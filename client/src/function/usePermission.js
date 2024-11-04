import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getUser from "./getUser";

function usePermission(level) {
    const LEVELS = {
        user: 0,
        manager: 1,
        admin: 2
    };
    const navigate = useNavigate();
    const user = getUser();
    



    useEffect(() => {

        if (user === null) {
            console.log('not permission');
            navigate("/Login")            
        }
       else if (((LEVELS[user.role] < LEVELS[level] ))) {
            console.log('not permission');
            navigate("/managerRegister")
        }
    }, [navigate, level, user])

    return getUser();
}
export default usePermission