import { useEffect, useState } from "react";
import HeaderNav from "../components/navigtion/HeaderNav";
import usePermission from "../function/usePermission";
import { getManagerPassedAwayApi, updateManager } from "../function/fetchFunction";
import MyAccountUi from "../components/ui/MyAccountUi/MyAccountUi";
import { managerUpdateSchema } from "../JoiSchema/managerUpdateSchema";

function MyAccount() {
    let manager = usePermission('manager');
    if (!manager) {
        manager = {};
    }

    const { manager_id, ...managerFields } = manager;
    const [managerInputs, setManagerInputs] = useState({
        name: managerFields.name,
        email: managerFields.email,
        phone: managerFields.phone,
        newPassword: "",
        oldPassword: ""

    });
    const [message, setMessage] = useState({ body: "", type: "" });
    const [passedAwayArray, setPassedAwayArray] = useState([]);
    useEffect(() => {
        console.log(managerInputs);
    }, [managerInputs])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setManagerInputs({ ...managerInputs, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(managerInputs);
        const { error } = managerUpdateSchema.validate(managerInputs);
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


    const getPassedAwayArray = async (id) => {
        const data = await getManagerPassedAwayApi(id);
        setPassedAwayArray(data);
    }

    useEffect(() => {
        // setManagerInputs({ ...manager });
        getPassedAwayArray(manager_id);
    }, [])




    return (
        <>
            <HeaderNav />
            {manager_id && <>
                <MyAccountUi
                    manager={managerInputs}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    message={message}
                    passedAwayArray={passedAwayArray}
                />
            </>
            }
        </>
    )

}
export default MyAccount;