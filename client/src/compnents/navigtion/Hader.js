import { NavLink } from "react-router-dom";

function HeaderNav() {
    return <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/Todos"}>Todos</NavLink>
        <NavLink to={"/Albums"}>Albums</NavLink>
        <NavLink to={"/Posts"}>Posts</NavLink>
    </nav>
}
export default HeaderNav