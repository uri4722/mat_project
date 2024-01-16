import "./css/managerDetailsUi.css"


function ManagerDetailsUi({ manager, handleChange, handleSubmit, message }) {
    const { name, password, email, phone } = manager;
    return (<form onSubmit={handleSubmit}>
        <h1>פרטים אישיים</h1>
        {message && <div className={message.type}>{message.body}</div>}
        <label >
            :שם מלא
        </label>
            <input type="text" name="name" onChange={handleChange} value={name} />
        <label >
            :סיסמא
        </label>
            <input type="text" name="password" onChange={handleChange} value={password} />
        <label >
            :דוא"ל
        </label>
            <input type="email" name="email" onChange={handleChange} value={email} />
        <label >
            :טלפון
        </label>
            <input type="text" name="phone" onChange={handleChange} value={phone?phone:""} />
        <button>שמור</button>
    </form>

    )
}
export default ManagerDetailsUi;