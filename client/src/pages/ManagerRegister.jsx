import { NavLink } from "react-router-dom";
import Header from "../compnents/LandingPageCompnent/Header";
import "./css/managerRegister.css";
import { useState } from "react";
import Joi from 'joi';


export default function ManagerRegister() {
    const [user, setUser] = useState({ name: "", password: "", verifyPassword: "", email: "", phone: "" });
    const [error, setError] = useState("");


    const schema = Joi.object({
        // name:
        //     Joi.string().min(2)
        //         .message("שדה חובה")
        //         .required()
        // ,
        // password:
        //     Joi.string()
        //         .min(6)
        //         .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        //         .required()
        // ,


        // verifyPassword:
        //     Joi.valid(user.password)
        //         .required()
        //         .messages({ 'any.only': 'הסיסמאות חייבות להיות זהות' }),
        // email:
        //     Joi.string()
        //         .email({ tlds: { allow: false } })
        //         .message("כתובת מייל לא תקינה")
        //         .required(),
        // phone:
        //     Joi.string()
        //         .pattern(new RegExp('^[0-9]{10}$'))
        //         .message("מספר טלפון חייב להכיל 10 ספרות בלבד")
        //         .required(),

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
        <div className="register">
            <form onSubmit={handleSubmit}>
                <h1>הרשמה</h1>
                {error && <div className="error">{error}</div>}
                <input type="text" placeholder="שם מלא" onChange={handleChange} name="name" value={user.name} />
                <input type="text" placeholder="כתובת מייל" onChange={handleChange} name="email" value={user.email} />
                <input type="password" placeholder="סיסמא" onChange={handleChange} name="password" value={user.password} />
                <input type="password" placeholder="אימות סיסמא" onChange={handleChange} name="verifyPassword" value={user.verifyPassword} />
                <input type="text" placeholder="טלפון" onChange={handleChange} name="phone" value={user.phone} />
                <button>הרשם</button>

                <NavLink to={"/login"} >התחברות </NavLink>

            </form>
        </div>
    </>
    );
}