import { NavLink } from "react-router-dom"
import Header from "../compnents/LandingPageCompnent/Header"
import "./css/login.css"
import { useState } from "react"
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
            <div className="loginForm">
                <form onSubmit={handleSubmit}>
                    <h1>התחברות</h1>
                    <input type="text" placeholder="כתובת מייל" name="email" value={user.email} onChange={handleChange} />
                    <input type="password" placeholder="סיסמא" name="password" value={user.password} onChange={handleChange} />
                    <button>התחבר</button>
                    <NavLink to={"/managerRegister"} >יצירת חשבון</NavLink>
                </form>
            </div>
        </>
    )
}

export default Login


