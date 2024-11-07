import { useState } from "react";
import UserRegisterUi from "../components/ui/UserRegisterUi/UserRegisterUi";

import { createUser } from "../function/fetchFunction";
import { userRegisterSchema } from "../JoiSchema/userRegisterSchema";
import Popup from "../components/ui/PopupComponente/PopupComponent";

function UserRegister({ setRegisterDisplay ,setIsUserConnected,theme = 'neutral'}) {
    const [user, setUser] = useState({ name: "", email: "", password: "" });
    const [message, setMessage] = useState({ body: "", type: "" });
    const handleChangeInput = ({ target }) => {
        setUser({ ...user, [target.name]: target.value })
    }

    const handleSubmit = async () => {
        const { error } = schema.validate(user);
        if (error) {
            setMessage({ body: error.details[0].message, type: "error" });
            return;
        }
        if (!error) {
            try {
                const newUser = await createUser(user);
                sessionStorage.setItem('user', JSON.stringify(newUser));

                console.log(newUser);
                setMessage({ body: "ההרשמה בוצעה בהצלחה", type: "success" });
                setUser({ name: "", email: "", password: "" });
                setIsUserConnected(true);
                setTimeout(setRegisterDisplay, 1600)
            } catch (e) {
                handleError(e);
            }



        }
    }

    const handleError = (error) => {
        console.log(error);
        let message ="";
        switch (error.message) {
            case "user already exists":
                message = "המשתמש כבר קיים במערכת";
                break;
                case "Name, password, and email are required":
                message = "עליך למלאות את כל השדות";
                break;
                case "Invalid email":
                message = "כתובת מייל לא תקינה";
                break;
                case "Password must be at least 6 characters":
                message = "סיסמא חייבת להכיל לפחות 6 תווים";
                break;
            default:
                message = "שגיאה בהרשמה";
                break;
        }
        setMessage({ body:message, type: "error" });
    }

        

    const schema = userRegisterSchema;


    return <>
    <Popup setDisplay={setRegisterDisplay}>
        <UserRegisterUi
            user={user}
            handleChangeInput={handleChangeInput}
            handleSubmit={handleSubmit}
            setRegisterDisplay={setRegisterDisplay}
            message={message}
            theme={theme}
        />
        </Popup>
    </>
}
export default UserRegister;