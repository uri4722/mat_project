import Divider from "@mui/joy/Divider";
import "./css/myCommitmentsUi.css"

function MyCommitmentsUi({ commitments }) {
    return (
        <div className="commitments-container">
            <h2>המשניות שקיבלתי על עצמי</h2>
            {commitments.map((commitment, index) => {
                return (
                    <div key={index} className="commitments-list">
                        <Divider sx={{ '--Divider-childPosition': "50%" }}>
                            <h3> {commitment.passedAwayName}</h3>
                        </Divider>

                        <ul>
                            {commitment.masechtot.map((masechet, index) => {
                                return (
                                    <li key={index} >
                                        <span className="masechet">📖{masechet}</span>

                                    </li>
                                )
                            }
                            )}
                        </ul>
                    </div>
                )
            }
            )}
        </div>
    )
} export default MyCommitmentsUi;