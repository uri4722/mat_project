import "./css/login.css"
import { useState } from "react"
import Header from "../compnents/navigtion/Header";
import LoginUi from "../compnents/ui/LoginUi/LoginUi";
import { useNavigate } from "react-router-dom";
import { LoginManager } from "../function/fetchFunction";
import { loginSchema } from "../JoiSchema/loginSchema";
function Login() {
    const [user, setUser] = useState({ email: "", password: "" });
    const [rememberMe, setRememberMe] = useState(false);
    const [message, setMessage] = useState({ body: "", type: "" });
    const navigate = useNavigate();

    const handleChange = ({ target }) => {
        setUser({ ...user, [target.name]: target.value });
    }

    const handleCheck = ({ target }) => {
        setRememberMe(target.checked);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        const { error } = schema.validate(user);
        if (error) {
            setMessage({ body: error.details[0].message, type: "error" });
            return;
        }
        else {
            try {
                const manager = await LoginManager(user);

                rememberMe ?
                    localStorage.setItem("manager", JSON.stringify(manager)) :
                    sessionStorage.setItem("manager", JSON.stringify(manager));

                setMessage({ body: "התחברת בהצלחה", type: "success" });
                setUser({ email: "", password: "" });
                setTimeout(() => {
                    navigate("/MyAccount");
                }, 1600)
            } catch (error) {
                setMessage({ body: error.message, type: "error" });
            }

        }


    }

    const schema = loginSchema;



    return (
        <>
            <Header />
            <LoginUi
                message={message}
                user={user}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleCheck={handleCheck}
            />
        </>
    )
}

export default Login


