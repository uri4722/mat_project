import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";

import './css/userFormUi.css'
import { Link } from "@mui/joy";

function UserFormUi({ user, isUserConnected, handleChangeInput, handleSubmit, message, setRegisterDisplay }) {
    console.log(message);
    
    return <div className="formContiner">

        <div className="form-send">
            {message && <h1>{message.body}</h1>}
            {!isUserConnected && <>
                <Input
                    type="email"
                    sx={{
                        "--Input-radius": "10px",
                        width: "250px",
                        marginRight: "10px"
                    }}
                    placeholder="הכנס אימייל   "
                    color="success"
                    name="email"
                    value={user.email}
                    onChange={handleChangeInput}
                />
                <Input
                    type="password"
                    sx={{
                        "--Input-radius": "10px",
                        width: "250px",
                        marginRight: "10px"

                    }}
                    placeholder="הכנס סיסמא   "
                    color="success"
                    name="password"
                    value={user.password}
                    onChange={handleChangeInput}
                /></>
            }
           {(!isUserConnected || (isUserConnected && !message.body)) && <Button onClick={handleSubmit} color="success" size="sm">{!isUserConnected?"התחברות":"לאישור"}</Button>}
        </div>
        {!isUserConnected && <Link color="success" onClick={() => setRegisterDisplay(true)}>לא רשום עדין</Link>}
    </div>
}
export default UserFormUi;