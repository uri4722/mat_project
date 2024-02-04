import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo-project.png";
import "./css/Logo.css";

function Logo() {
    return (
        <nav className="logo">
            <NavLink to={"/"}> <img src={logo} alt="logo" /></NavLink>
        </nav>
    )
}
export default Logo;