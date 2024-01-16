import { useState } from "react";
import UserRegisterUi from "../components/ui/UserRegisterUi/UserRegisterUi";

import { createUser } from "../function/fetchFunction";
import { userRegisterSchema } from "../JoiSchema/userRegisterSchema";

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
                const newUser = await createUser(user);
                console.log(newUser);
                setMessage({ body: "ההרשמה בוצעה בהצלחה", type: "success" });
                setUser({ name: "", email: "", password: "" });
                setTimeout(setRegisterDisplay, 1600)
            } catch (e) {
                setMessage({ body: e.message, type: "error" });
            }



        }
    }

    const schema = userRegisterSchema;


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