import { NavLink } from "react-router-dom";

function ManagerRegisterUi({ user, handleChange, handleSubmit, error }) {

    return <div className="register">
        <form onSubmit={handleSubmit}>
            <h1>הרשמה</h1>
            {error && <div className="error">{error}</div>}
            <input type="text" placeholder="שם מלא" onChange={handleChange} name="name" value={user.name} />
            <input type="text" placeholder="כתובת מייל" onChange={handleChange} name="email" value={user.email} />
            <input type="password" placeholder="סיסמא" onChange={handleChange} name="password" value={user.password} />
            <input type="password" placeholder="אימות סיסמא" onChange={handleChange} name="verifyPassword" value={user.verifyPassword} />
            <input type="text" placeholder="טלפון" onChange={handleChange} name="phone" value={user.phone} />
            <button>הרשם</button>

            <NavLink to={"/login"} >התחברות </NavLink>

        </form>
    </div>
}

export default ManagerRegisterUi;   

