import "./css/managerRegister.css";
import { useState } from "react";
import ManagerRegisterUi from "../components/ui/LoginUi/ManagerRegisterUi";
import { useNavigate } from "react-router-dom";
import { createManager } from "../function/fetchFunction";
import { managerRegisterSchema } from "../JoiSchema/managerRegisterSchema";
import HeaderNav from "../components/navigtion/HeaderNav";


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
                let newUser = await createManager(user);
                newUser.manager_id = newUser.id;
                delete newUser._id;
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
        < HeaderNav />
        <ManagerRegisterUi
            user={user}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            message={message}
        />
    </>
    );
}