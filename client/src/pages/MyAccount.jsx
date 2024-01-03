import { useEffect, useState } from "react";
import HeaderNav from "../compnents/navigtion/HeaderNav";
import useManagerPermission from "../function/usePermission";
import { getManagerPassedAwayApi, updateManager } from "../function/fetchFunction";
import MyAccountUi from "../compnents/ui/MyAccountUi/MyAccountUi";
import { managerRegisterSchema } from "../JoiSchema/managerRegisterSchema";

function MyAccount() {
    const manager = useManagerPermission();
    const { manager_id, ...managerFields } = manager;
    const [managerInputs, setManagerInputs] = useState({ ...managerFields });
    const [message, setMessage] = useState({ body: "", type: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setManagerInputs({ ...managerInputs, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error } = managerRegisterSchema.validate(managerInputs);
        if (error) {
            setMessage({ body: error.details[0].message, type: "error" });
            return;
        }

        if (!error) {
            try {
                await updateManager(managerInputs, manager_id);
                sessionStorage.getItem("manager") ?
                    sessionStorage.setItem("manager", JSON.stringify({ ...managerInputs, manager_id: manager_id })) :
                    localStorage.setItem("manager", JSON.stringify({ ...managerInputs, manager_id: manager_id }));
                // setManagerInputs({ ...managerInputs });
                setMessage({ body: "העידכון בוצע בהצלחה", type: "success" });

            } catch (error) {
                setMessage({ body: error.message, type: "error" });
            }
        }
        console.log(managerInputs);
    }
    // const [managerDetails, setMmanagerDetails] = useState({});
    // const [passedAwayArray, setPassedAwayArray] = useState([]);

    // const getPassedAwayArray = async (id) => {
    //     const data = await getManagerPassedAwayApi(id);
    //     setPassedAwayArray(data);
    // }

    // useEffect(() => {
    //     getPassedAwayArray(manager?.manager_id);
    //     setManagerInputs({...manager});
    // }, [manager?.manager_id])
    // useEffect(() => {
    //     // console.log(managerInputs);
    // }, [managerInputs])

    // useEffect(() => {
    //     console.log(passedAwayArray);
    // }, [passedAwayArray])

    return (
        <>
            <HeaderNav />
            <MyAccountUi manager={managerInputs} handleChange={handleChange} handleSubmit={handleSubmit} message={message} />
        </>
    )

}
export default MyAccount;