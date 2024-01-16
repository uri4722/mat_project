import ManagerDetailsUi from "./ManagerDetailsUi";
import PassedAwayListUi from "./PassedAwayListUi";
import "./css/myAccountUi.css";

function MyAccountUi({ manager, handleChange, handleSubmit, message, passedAwayArray }) {

    return (
        <div className='container'>
            <div className="managerDetails">
                <ManagerDetailsUi manager={manager} handleChange={handleChange} handleSubmit={handleSubmit} message={message} />
            </div>
            <div className="passedAwayList">
                < PassedAwayListUi passedAwayArray={passedAwayArray} />
            </div>
        </div>
    )
}
export default MyAccountUi;