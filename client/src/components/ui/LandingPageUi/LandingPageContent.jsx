import { useState } from "react";
import Hebcal from "hebcal";
import "./css/landingPageContent.css"
import { NavLink } from "react-router-dom";
import { calculateHowManyYearsPassed } from "../../../function/calculateFunction/calculateHowManyYearsPassed";

function LandingPageContent({ yahrzeitList }) {
    const currentHebrewDate = new Hebcal.HDate().toString('h');
    const [current, setCurrent] = useState(0);

    const switchYahrzeit = (index) => {
        setCurrent(Math.abs(index) % yahrzeitList.length);
    }

    return (
        <div className="landingPageContent">
            <div className="todayDate">
                היום {currentHebrewDate} חל יום הפטירה
            </div>
            {yahrzeitList.length > 0 ?
                <>
                    <div className="contentContainer">
                        <button onClick={() => switchYahrzeit(current - 1)}>
                            {"<"}
                        </button>
                        <div className="landingPageContentText">
                            <h2>{yahrzeitList[current].name} זצ"ל</h2>
                            <h3>יום השנה ה {calculateHowManyYearsPassed(yahrzeitList[current].year_death)} לפטירתו</h3>
                        </div>
                        <button onClick={() => switchYahrzeit(current + 1)}>
                            {">"}
                        </button>
                    </div>
                    < NavLink to={`/memorialProfile/${yahrzeitList[current]?.passed_away_id}`}  >
                        <button className="takeBtn">לקבלת משניות לעלוי נשמתו</button>
                    </NavLink>
                </> :
                <h2>אין יארצטים ליום זה</h2>
            }

        </div>
    );
}
export default LandingPageContent;