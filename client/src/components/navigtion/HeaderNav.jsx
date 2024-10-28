import { NavLink } from "react-router-dom";
import "./css/HeaderNav.css"
import { useEffect, useState } from "react";
import isUser from "../../function/isUser";
import Logo from "./Logo";

function HeaderNav() {
    const userConect =  isUser('user');
    const managerConect = isUser('manager');

    return (
        <div className="header-nav">
            <nav className="loginNav">
                <NavLink to={userConect ? '/logout' : '/login'}> {userConect || managerConect ? 'התנתקות' : 'התחברות'} </NavLink>
            </nav>
            <nav className="navBtn">
                {managerConect ? <NavLink to={"/MyAccount"}>לאזור האישי</NavLink>: null}
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