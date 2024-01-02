import { useEffect, useState } from "react";
import HeaderNav from "../compnents/navigtion/HeaderNav";
import useManagerPermission from "../function/usePermission";
import { getManagerPassedAwayApi } from "../function/fetchFunction";
import MyAccountUi from "../compnents/ui/MyAccountUi/MyAccountUi";

function MyAccount() {
    const manager = useManagerPermission();
    const [managerInputs, setManagerInputs] = useState({});
    const [passedAwayArray, setPassedAwayArray] = useState([]);

    const getPassedAwayArray = async (id) => {
        const data = await getManagerPassedAwayApi(id);
        setPassedAwayArray(data);
    }

    useEffect(() => {
        getPassedAwayArray(manager?.manager_id);
        setManagerInputs({...manager});
    }, [manager?.manager_id])
    useEffect(() => {
        console.log(managerInputs);
    }, [managerInputs])

    // useEffect(() => {
    //     console.log(passedAwayArray);
    // }, [passedAwayArray])

    return (
        <>
            <HeaderNav />
            <MyAccountUi manager={managerInputs} />
        </>
    )

}
export default MyAccount;