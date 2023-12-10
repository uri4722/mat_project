import { NavLink } from "react-router-dom"
import Header from "../compnents/LandingPageCompnent/Header"
import "./css/login.css"
function Login() {



    return (
        <>
            <Header />
            <div className="loginForm">
                <form>
                    <h1>התחברות</h1>
                    <input type="text" placeholder="שם מלא" />
                    <input type="password" placeholder="סיסמא" />
                    <button>התחבר</button>
                    <NavLink to={"/managerRegister"} >יצירת חשבון</NavLink>
                </form>
            </div>
        </>
    )
}

export default Login


