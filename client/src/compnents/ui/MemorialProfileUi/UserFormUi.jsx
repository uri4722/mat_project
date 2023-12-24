import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";

import './css/userFormUi.css'

function userFormUi({ user, handleChangeInput, handleSubmit, message }) {
    return <> {<div className="form-send">
        {message && <h1>{message.body}</h1>}
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
        />
        <Button onClick={handleSubmit} color="success" size="sm">לאישור</Button>
    </div>}</>

}
export default userFormUi;