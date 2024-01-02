import ManagerDetailsUi from "./ManagerDetailsUi";
import "./css/myAccountUi.css";

function MyAccountUi({ manager, handleChange, handleSubmit, message }) {

    return (
        <div className='container'>
            <div className="managerDetails">
                <ManagerDetailsUi manager={manager} handleChange={handleChange} handleSubmit={handleSubmit} message={message} />
            </div>
            <div className="passedAwayList"></div>
        </div>
    )
}
export default MyAccountUi;