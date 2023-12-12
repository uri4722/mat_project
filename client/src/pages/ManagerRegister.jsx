import "./css/managerRegister.css";
import { useState } from "react";
import Joi from 'joi';
import Header from "../compnents/navigtion/Header";
import ManagerRegisterUi from "../compnents/ui/LoginUi/ManagerRegisterUi";


export default function ManagerRegister() {
    const [user, setUser] = useState({
        name: "",
        password: "",
        verifyPassword: "",
        email: "",
        phone: ""
    });
    const [error, setError] = useState("");


    const schema = Joi.object({
        name:
            Joi.string().min(2)
                .message("שם חייב להכיל לפחות 2 תווים")
                .required().messages({ 'string.empty': ' צריך למלאות שם' }),
        password:
            Joi.string()
                .min(6)
                .message("סיסמא חייבת להכיל לפחות 6 תווים")
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
                .message("סיסמא חייבת להכיל אותיות באנגלית ומספרים בלבד")
                .required()
                .messages({ 'string.empty': ' צריך למלאות סיסמא' }),
        verifyPassword:
            Joi.valid(Joi.ref('password'))
                .required()
                .messages({ 'any.only': 'הסיסמאות חייבות להיות זהות' }),
        email:
            Joi.string()
                .email({ tlds: { allow: false } })
                .message("כתובת מייל לא תקינה")
                .required(),
        phone:
            Joi.string()
                .pattern(new RegExp('^[0-9]{10}$'))
                .message("מספר טלפון חייב להכיל 10 ספרות "),

    })

    const handleChange = ({ target }) => {
        setUser({ ...user, [target.name]: target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);

        const { error } = schema.validate(user);
        if (error) {
            setError(error.details[0].message);
            return;
        }
        if (!error) {

            setUser({ name: "", password: "", verifyPassword: "", email: "", phone: "" });
        }


    }

    return (<>
        <Header />
        <ManagerRegisterUi
            user={user}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            error={error} />
    </>
    );
}