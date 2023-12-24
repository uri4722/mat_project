import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";

function userFormUi( { user, handleChangeInput, handleSubmit}) {
    return <> {<div className="form-send">
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
            placeholder="הכנס סיסמא לאישור  "
            color="success"
            name="password"
            value={user.password}
            onChange={handleChangeInput}
        />
        <Button onClick={ handleSubmit} color="success" size="sm">לאישור</Button>

    </div>}</>

}
export default userFormUi;