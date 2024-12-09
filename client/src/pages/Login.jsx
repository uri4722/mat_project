import "./css/login.css"
import { useEffect, useState } from "react"
import LoginUi from "../components/ui/LoginUi/LoginUi";
import { useNavigate } from "react-router-dom";
import { fetchLogin } from "../function/fetchFunction";
import { loginSchema } from "../JoiSchema/loginSchema";
import HeaderNav from "../components/navigtion/HeaderNav";
import { Spinner } from "../components/ui/spinner/Spinner";
import UserRegister from "./UserRegister";
import getUser from "../function/getUser";
console.log('user role manager uri4722@gamil.com password uri12345');

function Login() {
    const [isUserConnected, setIsUserConnected] = useState(getUser()?true:false);
    const navigate = useNavigate();

useEffect(() => {
    let user = getUser();
    setIsUserConnected(user ? true : false);
    if(isUserConnected){
        navigate(whereToContinue(user.role));
    }} , [isUserConnected])

    const [login, setLogin] = useState({ email: "", password: "" });
    const [rememberMe, setRememberMe] = useState(false);
    const [message, setMessage] = useState({ body: "", type: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [registerDisplay, setRegisterDisplay] = useState(false);

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
                console.log(user);
                
                
                rememberMe ?
                    localStorage.setItem('user', JSON.stringify(user)) :
                    sessionStorage.setItem('user', JSON.stringify(user));

                setMessage({ body: "התחברת בהצלחה", type: "success" });
                setLogin({ email: "", password: "" });
                setIsLoading(false);
                navigate(whereToContinue(user.role));
            } catch (error) {
                console.log(error);
                
                setIsLoading(false);
                setMessage({ body: "ההתחברות נכשלה כנראה אחד מהנתונים שגויים", type: "error" });
            }

        }

    }
const whereToContinue = (role) => {
    let path = "";
switch (role) {
    case "admin":
        path = "/admin";
        break;
    case "manager":
        path = "/MyAccount";
    break;

    default:
        path = "/MyCommitments";
        break;
}
return path;
}


    return (
        <>
            < HeaderNav />
            {!isLoading ?<>
                <LoginUi
                    message={message}
                    user={login}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleCheck={handleCheck}
                    setRegisterDisplay={setRegisterDisplay}
                />
                {registerDisplay && <UserRegister setRegisterDisplay={setRegisterDisplay} setIsUserConnected={setIsUserConnected}/>}
                </>
                : <Spinner size={150}/>
            }


        </>
    )
}

export default Login


