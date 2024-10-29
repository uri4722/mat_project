import { useNavigate } from "react-router-dom";
import "./css/logout.css"
import HeaderNav from "../components/navigtion/HeaderNav";
import { useEffect } from "react";

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate("/"), 1200);
        // remove user from local storage to log user out
        localStorage.removeItem('manager');
        sessionStorage.removeItem('manager');
        localStorage.removeItem('user');
        sessionStorage.removeItem('user');
    })




    return <>
        <HeaderNav />
        <div className="Logout-msg">
            <h1>התנתקות בוצע בהצלחה </h1>
        </div>

    </>


}
export default Logout;