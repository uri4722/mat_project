import { useEffect, useState } from "react";
import Hebcal from "hebcal";
import { HDate } from '@hebcal/core';

import "./css/landingPageContent.css"

function LandingPageContent({ yahrzeitList }) {
    // const heToday = new HDate();
    const heToday = new Hebcal.HDate();
    const [index, setIndex] = useState(0);


    const calcDiff = () => {
        if (yahrzeitList.length > 0) {
            const date = HDate.fromGematriyaString(yahrzeitList[index]?.date);
            const year = date.getFullYear();

            const courantDate = heToday.getFullYear();
            return courantDate - year;
        }

        return "";
    }

    useEffect(() => { console.log(yahrzeitList) }, [yahrzeitList])
    useEffect(() => {
        calcDiff();
    }, [index])

    return (
        <div className="landingPageContent">
            <div className="todayDate">
                היום {heToday.toString('h')} חל יום הפטירה
            </div>
            <div className="contentContainer">
                <button onClick={() => setIndex(Math.abs((index - 1) % yahrzeitList.length))}>{"<"}</button>
                <div className="landingPageContentText">
                    <h2>{yahrzeitList[index]?.name} זצ"ל</h2>
                    <h3>יום השנה ה {calcDiff()} לפטירתו</h3>
                </div>
                <button onClick={() => setIndex((index + 1) % yahrzeitList.length)}>{">"}</button>
            </div>
            <button className="takeBtn">לקבלת משניות לעלוי נשמתו</button>
        </div>
    );
}
export default LandingPageContent;