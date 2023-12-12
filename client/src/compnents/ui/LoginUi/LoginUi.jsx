import { NavLink } from "react-router-dom";

function LoginUi({ user, handleChange, handleSubmit }) {

    return <div className="loginForm">
        <form onSubmit={handleSubmit}>
            <h1>התחברות</h1>
            <input type="text" placeholder="כתובת מייל" name="email" value={user.email} onChange={handleChange} />
            <input type="password" placeholder="סיסמא" name="password" value={user.password} onChange={handleChange} />
            <button>התחבר</button>
            <NavLink to={"/managerRegister"} >יצירת חשבון</NavLink>
        </form>
    </div>
}
export default LoginUi;