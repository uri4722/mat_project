import { useContext } from "react"
import { UserContext } from "./MyWeb"
import Nav from "./Nav"

function UserNav() {
    const user = useContext(UserContext)

    return <div className="userNav">
        <h1>Welcome {user && user.username}</h1>
        <Nav textContent={'Info'} />
        <Nav textContent={'Logout'} />

    </div>
}
export default UserNav