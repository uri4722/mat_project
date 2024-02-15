import { NavLink } from "react-router-dom";

function LoginUi({ user, handleChange, handleSubmit, handleCheck, message, type }) {
    console.log(type);
    return <div className={type === "user" ? " userForm loginForm" : "loginForm"}>
        <form onSubmit={handleSubmit}>
            <h1>התחברות</h1>
            <p
                className="p-login-type">{
                    type === "user" ?
                        "התחבר כדי לראות את המשניות שקיבלת על עצמך" :
                        "התחבר כדי לנהל את הדפים שלך"
                }
            </p>
            {
                message.body ?
                    <div className={message.type}>{message.body}</div> :
                    <p> הכנס את פרטי ההתחברות שלך </p>
            }

            <input type="text" placeholder="כתובת מייל" name="email" value={user.email} onChange={handleChange} />
            <input type="password" placeholder="סיסמא" name="password" value={user.password} onChange={handleChange} />
            {/* chackBox remmber me */}
            <div className="rememberMe">
                <input type="checkbox" name="rememberMe" onChange={handleCheck} />
                <label>זכור אותי</label>
            </div>
            <button>התחבר</button>
            <NavLink to={"/managerRegister"} >יצירת חשבון</NavLink>
        </form>
    </div >
}
export default LoginUi;