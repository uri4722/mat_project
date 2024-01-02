import ManagerDetailsUi from "./ManagerDetailsUi";
import "./css/myAccountUi.css";

function MyAccountUi({ manager }) {

    return (
        <div className='container'>
            <div className="managerDetails">
                <ManagerDetailsUi manager={manager} />
            </div>
            <div className="passedAwayList"></div>
        </div>
    )
}
export default MyAccountUi;