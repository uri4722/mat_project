import { useMemo, useState } from "react";
import Header from "../compnents/navigtion/Header";
import FormUi from "../compnents/ui/AddpassedAwayUi/FormUi";
import makeHeDates from "../function/makeHeDates";

import CircularProgress from '@mui/joy/CircularProgress';
import { createPassedAwayApi } from "../function/fetchFunction";



function CreatePassedAway() {
    const [newPassed, setNewPassed] = useState({
        name: "",
        year_death: "",
        month_death: "1",
        day_death: "1",
        age: "",
        about: "",
        img: "",
        lonely: false,
        soldier: false,
        rabbi: false,
        // זמני צריך להגיע מההרשמה
        manager_id: 1,

    });
    const [message, setMessage] = useState({ type: "", body: "" });
    const heDates = useMemo(() => {
        const heDates = makeHeDates();
        setNewPassed((prevPassed) => ({ ...prevPassed, year_death: heDates.yearOptions[0]}));
        return heDates;
    }, []); 


    const handleChange = (event) => {
        if (event.target.type === "checkbox") {
            setNewPassed({ ...newPassed, [event.target.name]: event.target.checked });
        }
        else
            setNewPassed({ ...newPassed, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(newPassed);
        try {
            await createPassedAwayApi(newPassed);
            setMessage({ type: "success", body: "הזכרון נוצר בהצלחה" });
        } catch (error) {
            console.log(error);
            setMessage({ type: "error", body: "הזכרון לא נוצר" });
        }
    }


    return (
        <>
            <Header />
            {heDates ?
                <FormUi
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    newPassed={newPassed}
                    message={message}
                    heDates={heDates}
                /> : <CircularProgress thickness={1} />}
            {message.type && <div className={message.type}>{message.body}</div>}

        </>
    );
}
export default CreatePassedAway;