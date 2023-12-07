import { NavLink } from "react-router-dom";
import "./css/HeaderNav.css"

function HeaderNav() {
 
    return (
        <div className="header-nav">
            <nav className="navBtn">
                <NavLink to={"/שדכ"}>להוספת נפטר</NavLink>
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