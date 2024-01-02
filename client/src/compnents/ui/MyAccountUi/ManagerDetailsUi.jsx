import "./css/managerDetailsUi.css"


function ManagerDetailsUi({ manager, handleChange, handleSubmit, message }) {
    const { full_name, password, verifyPassword, email, phone } = manager;  
    console.log(manager);
    return (<form onSubmit={handleSubmit}>
        <h1>פרטים אישיים</h1>
        {/* {message.type && <div className={message.type}>{message.body}</div>} */}
        <input type="text" name="full_name" onChange={handleChange} placeholder={full_name}/>
        <input type="password" name="password" onChange={handleChange} placeholder={password}/>
        <input type="password" name="verifyPassword" onChange={handleChange} placeholder={verifyPassword}/>
        <input type="email" name="email" onChange={handleChange} placeholder={email}/>
        <input type="text" name="phone" onChange={handleChange} placeholder={phone}/>
        <button>שמור</button>
    </form>

    )
}
export default ManagerDetailsUi;