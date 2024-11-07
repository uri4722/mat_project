import { Button, Input } from "@mui/joy";
import Xcompnent from "../Xcomponent";
import "./css/UserRegisterUi.css";

function UserRegisterUi({ user, handleChangeInput, handleSubmit, setRegisterDisplay, message, theme }) {
    return (
        <div className="form-register">
            <Xcompnent setRegisterDisplay={setRegisterDisplay} />
            <form >
                {message && <h5>{message.body}</h5>}
                <Input
                    type="email"
                    className="input"
                    placeholder="הכנס אימייל"
                    color={theme}
                    name="email"
                    value={user.email}
                    onChange={handleChangeInput}
                />
                <Input
                    type="password"
                    className="input"
                    placeholder="הכנס סיסמא"
                    color={theme}
                    name="password"
                    value={user.password}
                    onChange={handleChangeInput}
                />
                <Input
                    className="input"
                    type="text"
                    placeholder="שם משתמש"
                    color={theme}
                    name="name"
                    value={user.name}
                    onChange={handleChangeInput}
                />
                <Button onClick={handleSubmit} color={theme} size="sm" sx={{ width: "280px" }}>להרשמה</Button>
            </form>
        </div>

    )
}
export default UserRegisterUi;