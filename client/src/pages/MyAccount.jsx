import { useEffect, useState } from "react";
import HeaderNav from "../components/navigtion/HeaderNav";
import usePermission from "../function/usePermission";
import { getManagerPassedAwayApi, updateManager } from "../function/fetchFunction";
import MyAccountUi from "../components/ui/MyAccountUi/MyAccountUi";
import { managerUpdateSchema } from "../JoiSchema/managerUpdateSchema";

function MyAccount() {
    
    let manager = usePermission('manager');
console.log(manager);

    const { user_id, ...managerFields } = manager || {};
    const [managerInputs, setManagerInputs] = useState({
        name: managerFields.name,
        email: managerFields.email,
        phone: managerFields.phone,
        role: managerFields.role,
        newPassword: "",
        oldPassword: ""

    });
    const [message, setMessage] = useState({ body: "", type: "" });
    const [passedAwayArray, setPassedAwayArray] = useState([]);
 

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
                await updateManager(managerInputs, user_id);
                sessionStorage.getItem("user") ?
                    sessionStorage.setItem("user", JSON.stringify({ ...managerInputs, user_id: user_id })) :
                    localStorage.setItem("user", JSON.stringify({ ...managerInputs, user_id: user_id }));
                // setManagerInputs({ ...managerInputs });
                setMessage({ body: "העידכון בוצע בהצלחה", type: "success" });

            } catch (error) {
                console.log("error :",error.message);
                
                setMessage({ body: "העדכון נכשל. אנא בדוק את המידע ונסה שוב.", type: "error" });
            }
        }
    }


    const getPassedAwayArray = async (id) => {
        const data = await getManagerPassedAwayApi(id);
        setPassedAwayArray(data);
    }

    useEffect(() => {
        // setManagerInputs({ ...manager });
        getPassedAwayArray(user_id);
    }, [])




    return (
        <>
            <HeaderNav />
            {user_id && <>
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