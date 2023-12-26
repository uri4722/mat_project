import "./css/managerRegister.css";
import { useState } from "react";
import Joi from 'joi';
import Header from "../compnents/navigtion/Header";
import ManagerRegisterUi from "../compnents/ui/LoginUi/ManagerRegisterUi";
import { useNavigate } from "react-router-dom";
import { createManager } from "../function/fetchFunction";


export default function ManagerRegister() {
    const [user, setUser] = useState({
        name: "",
        password: "",
        verifyPassword: "",
        email: "",
        phone: ""
    });
    const [message, setMessage] = useState({ body: "", type: "" });
    const navigate = useNavigate();



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
                .required()
                .messages({ 'string.empty': ' צריך למלאות אימייל' }),

        phone:
            Joi.string()
                .pattern(new RegExp('^(\\+972|0)[1-9]\\d{7,8}$'))
                .message("מספר טלפון חייב להיות בפורמט המתאים")
                .allow(''),

    })

    const handleChange = ({ target }) => {
        setUser({ ...user, [target.name]: target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        const { error } = schema.validate(user);
        if (error) {
            setMessage({ body: error.details[0].message, type: "error" });
            return;
        }
        if (!error) {

            try {
                const newUser = await createManager(user);
                localStorage.setItem("manager", JSON.stringify(newUser));


                setUser({ name: "", password: "", verifyPassword: "", email: "", phone: "" });
                setMessage({ body: "ההרשמה בוצעה בהצלחה", type: "success" });
                setTimeout(() => {
                    navigate("/MyAccount");
                }, 1600)
            } catch (error) {
                setMessage({ body: error.message, type: "error" });
            }


        }
    }



    return (<>
        <Header />
        <ManagerRegisterUi
            user={user}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            message={message}
        />
    </>
    );
}