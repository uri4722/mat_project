import "./css/login.css"
import { useState } from "react"
import Header from "../compnents/navigtion/Header";
import LoginUi from "../compnents/ui/LoginUi/LoginUi";
import { useNavigate } from "react-router-dom";
function Login() {
    const [user, setUser] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = ({ target }) => {
        setUser({ ...user, [target.name]: target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);

        setUser({ name: "", password: "" });
        setTimeout(() => {
            navigate("/");
        }, 1600)
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


