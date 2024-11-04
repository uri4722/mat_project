import { useEffect, useState } from "react";
import HeaderNav from "../components/navigtion/HeaderNav";
import { useFetchApiGet } from "../function/useFetchApiGet";
import useAdminPermission from "../function/usePermission";




function Admin() {
    const admin = useAdminPermission('admin');

    const [users, isLoading, error] = useFetchApiGet("users");
    const [displayUsers, setDisplayUsers] = useState([]);

    useEffect(() => {
        console.log(isLoading);
        
        const startDisplayUsers = () => {
            if (!isLoading) {
                setDisplayUsers(users);
                console.log(users);
                if (error) {
                    console.log(error);
                }
                
            }
        }

        startDisplayUsers();
    }, [users, isLoading]);

    return (<>
    <HeaderNav />
     {/* <AdminUi/> */}
 
     </>);
}

export default Admin;   