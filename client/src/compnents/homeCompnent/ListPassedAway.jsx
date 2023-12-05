// import { useState } from "react";
// import PassedDisplayDitals from "./PassedDisplayDitals";
// import unknown_person from '../assets/unknown_person.jpg'

import DividedList from "../genralCompnent/DividedList";
import './css/ListPassedAway.css'


function ListPassedAway({ passedAwayArray }) {

    return (
        <div className="continerListPassed">
            <DividedList passedAwayArray={passedAwayArray} />
        </div>
    );
}

export default ListPassedAway;