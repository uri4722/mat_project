import { useEffect, useState } from "react";
import HeaderNav from "../compnents/navigtion/HeaderNav";
import useManagerPermission from "../function/usePermission";

function MyAccount() {
    const manager = useManagerPermission();
    const [managerDetails, setManagerDetails] = useState(null);


    useEffect(() => {
        if (manager) {
            setManagerDetails(JSON.parse(manager));
        }
    }, [])
    useEffect(() => {
        console.log(manager);
    }, [manager])

    return (
        <>
            <HeaderNav />
            <h1>MyAccount</h1>
        </>
    )

}
export default MyAccount;