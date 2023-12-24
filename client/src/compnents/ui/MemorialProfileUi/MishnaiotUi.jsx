import { useState } from "react";
import SederUi from "./SederUi";
import "./css/MishnaiotUi.css"

import Switch from '@mui/joy/Switch';


function MishnaiotUi({ mishnaiot, handleChangeMasechtot}) {

    const [display, setDisplay] = useState(false);

    const sedriMishna = ["סדר זרעים", "סדר מועד", "סדר נשים", "סדר נזיקין", "סדר קדשים", "סדר טהרות"]
    return (
        <>
            <div className="mishnaiotContiner">
                <div className="header">
                    <h1 onClick={() => setDisplay(!display)}>לקבלת משנה לזכרו </h1>
                    <Switch
                        color={display ? "success" : "neutral"}
                        checked={display}
                        onChange={() => setDisplay(!display)}
                        sx={{ marginLeft: "10px", marginTop: "5px" }}


                    />
                </div>
                {mishnaiot && display && mishnaiot.map((seder, index) => {
                    return (
                        <div className="seder" key={index}>
                            <SederUi seder={seder} name={sedriMishna[index]} handleChangeMasechtot={handleChangeMasechtot} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default MishnaiotUi;