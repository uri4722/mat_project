import "./css/login.css"
import { useState } from "react"
import Header from "../components/navigtion/Header";
import LoginUi from "../components/ui/LoginUi/LoginUi";
import { useNavigate } from "react-router-dom";
import { fetchLogin } from "../function/fetchFunction";
import { loginSchema } from "../JoiSchema/loginSchema";

function Login({ type }) {
    const [login, setLogin] = useState({ email: "", password: "" });
    const [rememberMe, setRememberMe] = useState(false);
    const [message, setMessage] = useState({ body: "", type: "" });
    const navigate = useNavigate();


    const handleChange = ({ target }) => {
        setLogin({ ...login, [target.name]: target.value });
    }

    const handleCheck = ({ target }) => {
        setRememberMe(target.checked);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(login);

        const schema = loginSchema;
        const { error } = schema.validate(login);
        if (error) {
            setMessage({ body: error.details[0].message, type: "error" });
            return;
        }
        else {
            try {
                const user = await fetchLogin(type, login);

                rememberMe ?
                    localStorage.setItem(type, JSON.stringify(user)) :
                    sessionStorage.setItem(type, JSON.stringify(user));

                setMessage({ body: "התחברת בהצלחה", type: "success" });
                setLogin({ email: "", password: "" });
                setTimeout(() => {
                    navigate(type === 'manager' ? "/MyAccount" : "/MyCommitments");
                }, 1600)
            } catch (error) {
                setMessage({ body: error.message, type: "error" });
            }

        }

    }


    return (
        <>
            <Header />
            <LoginUi
                message={message}
                user={login}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleCheck={handleCheck}
            />
        </>
    )
}

export default Login


