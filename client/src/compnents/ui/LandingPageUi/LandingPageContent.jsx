import "./css/landingPageContent.css"

function LandingPageContent({ heToday }) {

    return (
        <div className="landingPageContent">
            <div className="todayDate">
                היום {heToday} חל יום הפטירה
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