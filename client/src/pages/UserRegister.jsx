import { useState } from "react";
import UserRegisterUi from "../compnents/ui/UserRegisterUi/UserRegisterUi";

import Joi from 'joi';
import { createUser } from "../function/fetchFunction";

function UserRegister({ setRegisterDisplay }) {
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
                const user = await createUser(user);
                console.log(user);
                setMessage({ body: "ההרשמה בוצעה בהצלחה", type: "success" });
                setUser({ name: "", email: "", password: "" });
                setTimeout(setRegisterDisplay, 1600)
            } catch (e) {
                setMessage({ body: e.message, type: "error" });
            }



        }
    }

    const schema = Joi.object({
        email: Joi.string()
            .email({ tlds: { allow: false } })
            .message("כתובת מייל לא תקינה")
            .required()
            .messages({ 'string.empty': ' צריך למלאות אימייל' }),
        password: Joi.string()
            .min(6)
            .message("סיסמא חייבת להכיל לפחות 6 תווים")
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .message("סיסמא חייבת להכיל אותיות באנגלית ומספרים בלבד")
            .required()
            .messages({ 'string.empty': ' צריך למלאות סיסמא' }),
        name: Joi.string()
            .min(2)
            .message("שם חייב להכיל לפחות 2 תווים")
            .required()
            .messages({ 'string.empty': ' צריך למלאות שם' }),

    })


    return <>
        <UserRegisterUi
            user={user}
            handleChangeInput={handleChangeInput}
            handleSubmit={handleSubmit}
            setRegisterDisplay={setRegisterDisplay}
            message={message}

        />
    </>
}
export default UserRegister;