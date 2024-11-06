import { NavLink } from "react-router-dom";
import "./css/HeaderNav.css"
import isUser from "../../function/isUser";
import Logo from "./Logo";
import getUser from "../../function/getUser";

function HeaderNav() {
    const isUserConnected =  getUser();
    
    return (
        <div className="header-nav">
            <nav className="loginNav">
                <NavLink to={isUserConnected  ? '/logout' : '/login'}> {isUserConnected  ? 'התנתקות' : 'התחברות'} </NavLink>
            </nav>
            <nav className="navBtn">
                <NavLink to={"/MyAccount"}>לאזור האישי</NavLink>
                <NavLink to={"/MyCommitments"}>המשניות שלי</NavLink>
                <NavLink to={"/createPassedAway"}>להוספת נפטר</NavLink>
                <NavLink to={"/home"}>לרשימת הנפטרים</NavLink>
                <NavLink to={"/about"}>קצת עלינו</NavLink>
            </nav>
                <Logo />

        </div>
    );
}
export default HeaderNav