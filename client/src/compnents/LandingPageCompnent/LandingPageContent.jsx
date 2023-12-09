import "./css/landingPageContent.css"
import Hebcal from "hebcal";

function LandingPageContent() {
    const day = new Hebcal.HDate().toString('h');
    console.log(day);
    return (
        <div className="landingPageContent">
            <div className="todayDate">
                היום {day} חל יום הפטירה
            </div>
            <div className="contentContainer">
                <button>{"<"}</button>
                <div className="landingPageContentText">
                    <h2>רבי משה כהן זצ"ל</h2>
                    <h3>ימי השנה השישיים לפטירתו</h3>
                </div>
                <button>{">"}</button>
            </div>
            <button className="takeBtn">לקבלת משניות לעלוי נשמתו</button>
        </div>
    );
}
export default LandingPageContent;