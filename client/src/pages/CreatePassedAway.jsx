import { useState } from "react";
import FormUi from "../components/ui/AddpassedAwayUi/FormUi";

import { createPassedAwayApi } from "../function/fetchFunction";
import useManagerPermission from "../function/usePermission";
import { useNavigate } from "react-router-dom";

import './css/createPassedAway.css'
import HeaderNav from "../components/navigtion/HeaderNav";



function CreatePassedAway({ heDates }) {
    
    const manager = useManagerPermission('manager');
    
    const navigate = useNavigate();



    const [newPassed, setNewPassed] = useState({
        name: "",
        year_death: heDates.yearOptions[0],
        month_death: "1",
        day_death: "1",
        age: "",
        about: "",
        img: "",
        lonely: false,
        soldier: false,
        rabbi: false,
        manager_id: manager?.user_id
        

    });
    const [message, setMessage] = useState({ type: "", body: "" });



    const handleChange = (event) => {
        if (event.target.type === "checkbox") {
            setNewPassed({ ...newPassed, [event.target.name]: event.target.checked });
        }
        else if (event.target.type === "file") {
            // console.log(event.target.files[0]);
            setNewPassed({ ...newPassed, [event.target.name]: event.target.files[0] });
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
            setTimeout(() => {
                navigate("/home");
            }, 1400)

        } catch (error) {
            console.log(error);
           const errorMessage = error.message === "Access denied. You need approved first."? "אתה צריך לחכות לאישור החשבון שלך" : "הזכרון לא נוצר";
            if(error.message === "Access denied. You need approved first.")
            setMessage({ type: "error", body: errorMessage });
        }
    }


    return (
        <>
            < HeaderNav />
            {heDates && manager &&
                <FormUi
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    newPassed={newPassed}
                    message={message}
                    heDates={heDates}
                />}
            {message.type && <div className={message.type}>
                {message.body}
            </div>}
        </>
    );
}
export default CreatePassedAway;