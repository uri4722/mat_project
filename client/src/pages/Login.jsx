import "./css/login.css"
import { useState } from "react"
import LoginUi from "../components/ui/LoginUi/LoginUi";
import { useNavigate } from "react-router-dom";
import { fetchLogin } from "../function/fetchFunction";
import { loginSchema } from "../JoiSchema/loginSchema";
import HeaderNav from "../components/navigtion/HeaderNav";

function Login() {
    const [login, setLogin] = useState({ email: "", password: "" });
    const [rememberMe, setRememberMe] = useState(false);
    const [message, setMessage] = useState({ body: "", type: "" });
    const navigate = useNavigate();
    console.log('user role manager uri4722@gamil.com password uri12345');

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
                const user = await fetchLogin(login);
                console.log('role', user.role);
                rememberMe ?
                    localStorage.setItem('user', JSON.stringify(user)) :
                    sessionStorage.setItem('user', JSON.stringify(user));

                setMessage({ body: "התחברת בהצלחה", type: "success" });
                setLogin({ email: "", password: "" });
                setTimeout(() => {
                    navigate(user.role === 'manager' ? "/MyAccount" : "/MyCommitments");
                }, 1400)
            } catch (error) {
                setMessage({ body: error.message, type: "error" });
            }

        }

    }


    return (
        <>
            < HeaderNav />
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


