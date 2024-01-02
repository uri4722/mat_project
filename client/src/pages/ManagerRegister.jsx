import "./css/managerRegister.css";
import { useState } from "react";
import Joi from 'joi';
import Header from "../compnents/navigtion/Header";
import ManagerRegisterUi from "../compnents/ui/LoginUi/ManagerRegisterUi";
import { useNavigate } from "react-router-dom";
import { createManager } from "../function/fetchFunction";
import { managerRegisterSchema } from "../JoiSchema/managerRegisterSchema";


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

    const handleChange = ({ target }) => {
        setUser({ ...user, [target.name]: target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        const { error } = managerRegisterSchema.validate(user);
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