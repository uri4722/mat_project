import { Button, Input } from "@mui/joy";
import Xcompnent from "../Xcomponent";
import "./css/UserRegisterUi.css";

function UserRegisterUi({ user, handleChangeInput, handleSubmit, setRegisterDisplay, message }) {
    return (
        <div className="form-register">
            <Xcompnent setRegisterDisplay={setRegisterDisplay} />
            <form >
                {message && <h5>{message.body}</h5>}
                <Input
                    type="email"
                    className="input"
                    placeholder="הכנס אימייל"
                    color="success"
                    name="email"
                    value={user.email}
                    onChange={handleChangeInput}
                />
                <Input
                    type="password"
                    className="input"
                    placeholder="הכנס סיסמא"
                    color="success"
                    name="password"
                    value={user.password}
                    onChange={handleChangeInput}
                />
                <Input
                    className="input"
                    type="text"
                    placeholder="שם משתמש"
                    color="success"
                    name="name"
                    value={user.name}
                    onChange={handleChangeInput}
                />
                <Button onClick={handleSubmit} color="success" size="sm" sx={{ width: "280px" }}>לאישור</Button>
            </form>
        </div>

    )
}
export default UserRegisterUi;