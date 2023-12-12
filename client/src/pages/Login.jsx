import "./css/login.css"
import { useState } from "react"
import Header from "../compnents/navigtion/Header";
import LoginUi from "../compnents/ui/LoginUi/LoginUi";
function Login() {
    const [user, setUser] = useState({ email: "", password: "" });

    const handleChange = ({ target }) => {
        setUser({ ...user, [target.name]: target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);

        setUser({ name: "", password: "" });
    }


    return (
        <>
            <Header />
            <LoginUi
                user={user}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </>
    )
}

export default Login


