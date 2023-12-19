import { useEffect, useState } from "react";
import Header from "../compnents/navigtion/Header";
import FormUi from "../compnents/ui/AddpassedAwayUi/FormUi";
import makeHeDates from "../function/makeHeDates";

import CircularProgress from '@mui/joy/CircularProgress';



function AddPassedAway() {
    const [newPassed, setNewPassed] = useState({ name: "", year_death: "", month_death: "", day_death: "" });
    const [message, setMessage] = useState({ type: "", body: "" });
    const [heDates, setHeDates] = useState()


    const handleChange = (event) => {
        setNewPassed({ ...newPassed, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newPassed);
    }

    useEffect(() => {
        setHeDates(makeHeDates());
    }, []);

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
        </>
    );
}
export default AddPassedAway;