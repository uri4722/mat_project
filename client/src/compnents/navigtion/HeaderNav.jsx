import { NavLink } from "react-router-dom";
import "./css/HeaderNav.css"
import { useEffect, useState } from "react";

function HeaderNav() {
    const [manager, setManager] = useState(null);

    useEffect(() => {
        const manager = localStorage.getItem("manager") ?
            localStorage.getItem("manager") :
            sessionStorage.getItem("manager");
        if (manager) {
            setManager(JSON.parse(manager));
        }
    }, [])

    return (
        <div className="header-nav">
            <nav className="loginNav">
                <NavLink to={manager ? '/logout' : '/login'}> {manager ? 'התנתקות' : 'התחברות'} </NavLink>
            </nav>
            <nav className="navBtn">
                <NavLink to={"/MyAccount"}>לאזור האישי</NavLink>
                <NavLink to={"/createPassedAway"}>להוספת נפטר</NavLink>
                <NavLink to={"/home"}>לרשימת הנפטרים</NavLink>
                <NavLink to={"/about"}>קצת עלינו</NavLink>
            </nav>
            <nav className="logo">
                <NavLink to={"/"}> לוגו </NavLink>
            </nav>

        </div>
    );
}
export default HeaderNav