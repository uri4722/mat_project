import { useState } from "react";
import SederUi from "./SederUi";
import "./css/MishnaiotUi.css"

import Switch from '@mui/joy/Switch';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

function MishnaiotUi({ mishnaiot }) {

    const [display, setDisplay] = useState(false);
    const [obligations, setObligations] = useState({ email: "", masechtot: [] });
    const [email, setEmail] = useState("");

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
                            <SederUi seder={seder} name={sedriMishna[index]} />
                        </div>
                    )
                })}
                {display && <div className="btn-send">
                    <Input
                        type="email"
                        endDecorator={<Button onClick={({ target }) => { console.log(email) }} color="success">לאישור</Button>}
                        sx={{
                            "--Input-radius": "10px",
                            width: "400px",
                        }}
                        placeholder="הכנס אימייל לאישור  "
                        color="success"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    /></div>}

            </div>
        </>
    )
}
export default MishnaiotUi;