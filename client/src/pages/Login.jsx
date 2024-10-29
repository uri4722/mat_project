import "./css/login.css"
import { useState } from "react"
import LoginUi from "../components/ui/LoginUi/LoginUi";
import { useNavigate } from "react-router-dom";
import { fetchLogin } from "../function/fetchFunction";
import { loginSchema } from "../JoiSchema/loginSchema";
import HeaderNav from "../components/navigtion/HeaderNav";
import { Spinner } from "../components/ui/spinner/Spinner";
console.log('user role manager uri4722@gamil.com password uri12345');

function Login() {
    const [login, setLogin] = useState({ email: "", password: "" });
    const [rememberMe, setRememberMe] = useState(false);
    const [message, setMessage] = useState({ body: "", type: "" });
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

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
                setIsLoading(true);
                const user = await fetchLogin(login);
                console.log('role', user.role);
                rememberMe ?
                    localStorage.setItem('user', JSON.stringify(user)) :
                    sessionStorage.setItem('user', JSON.stringify(user));

                setMessage({ body: "התחברת בהצלחה", type: "success" });
                setLogin({ email: "", password: "" });
                setIsLoading(false);
                navigate(user.role === 'manager' ? "/MyAccount" : "/MyCommitments");
            } catch (error) {
                console.log(error);
                
                setIsLoading(false);
                setMessage({ body: "ההתחברות נכשלה כנראה אחד מהנתונים שגויים", type: "error" });
            }

        }

    }


    return (
        <>
            < HeaderNav />
            {!isLoading ?
                <LoginUi
                    message={message}
                    user={login}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleCheck={handleCheck}
                />
                : <Spinner size={150}/>
            }


        </>
    )
}

export default Login


