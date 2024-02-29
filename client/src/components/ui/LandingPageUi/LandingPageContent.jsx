import { useState } from "react";
import Hebcal from "hebcal";
import "./css/landingPageContent.css"
import { NavLink } from "react-router-dom";

function LandingPageContent({ yahrzeitList }) {
    const heToday = new Hebcal.HDate();
    const [index, setIndex] = useState(0);

    const calcYearToPassed = () => {
        if (yahrzeitList.length > 0) {
            const yearDeath = yahrzeitList[index]?.year_death;
            const courantYear = heToday.getFullYear();
            return courantYear - yearDeath;
        }
        return "";
    }

    return (
        <div className="landingPageContent">
            <div className="todayDate">
                היום {heToday.toString('h')} חל יום הפטירה
            </div>
            {yahrzeitList.length > 0 ?
                <>
                    <div className="contentContainer">
                        <button onClick={() => setIndex(Math.abs((index - 1) % yahrzeitList.length))}>
                            {"<"}
                        </button>
                        <div className="landingPageContentText">
                            <h2>{yahrzeitList[index]?.name} זצ"ל</h2>
                            <h3>יום השנה ה {calcYearToPassed()} לפטירתו</h3>
                        </div>
                        <button onClick={() => setIndex((index + 1) % yahrzeitList.length)}>
                            {">"}
                        </button>
                    </div>
                    < NavLink to={`/memorialProfile/${yahrzeitList[index]?.passed_away_id}`}  >
                        <button className="takeBtn">לקבלת משניות לעלוי נשמתו</button>
                    </NavLink>
                </> :
                <h2>אין יארצטים ליום זה</h2>
            }

        </div>
    );
}
export default LandingPageContent;