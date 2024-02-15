import "./css/managerDetailsUi.css"


function ManagerDetailsUi({ manager, handleChange, handleSubmit, message }) {
    const { name, email, phone, newPassword, oldPassword } = manager;
    return (<form onSubmit={handleSubmit}>
        <h1>פרטים אישיים</h1>
        {message && <div className={message.type}>{message.body}</div>}
        <label >
            :שם מלא
        </label>
        <input type="text" name="name" onChange={handleChange} value={name} />
        <label >
            :סיסמא ישנה
        </label>
        <input type="password" name="oldPassword" onChange={handleChange} value={oldPassword} />
        <label >
            :סיסמא חדשה
        </label>
        <input type="password" name="newPassword" onChange={handleChange} value={newPassword} />
        <label >
            :דוא"ל
        </label>
        <input type="email" name="email" onChange={handleChange} value={email} disabled />
        <label >
            :טלפון
        </label>
        <input type="text" name="phone" onChange={handleChange} value={phone ? phone : ""} />
        <button>שמור</button>
    </form>

    )
}
export default ManagerDetailsUi;