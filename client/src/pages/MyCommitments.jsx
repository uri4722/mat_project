import { useEffect, useState } from "react";
import Header from "../components/navigtion/Header";
import usePermission from "../function/usePermission";
import { getMyCommitmentsApi } from "../function/fetchFunction";
import MyCommitmentsUi from "../components/ui/MyCommitmentsUi/MyCommitmentsUi";

function MyCommitments() {
    let user = usePermission('user');
   
    const [commitments, setCommitments] = useState([]); // מערך של ההתחייבויות של המשתמש

    const getMyCommitments = async () => {
        try {

            const data = await getMyCommitmentsApi(user?.user_id);
            setCommitments(data);
        }
        catch (err) {
            console.log(err);
        }

    }

    useEffect(() => {
        getMyCommitments();
    }, [])

    //in the end delete
    useEffect(() => {
        console.log(commitments);

    }, [commitments])

    return (<>
        <Header />
        {user && <MyCommitmentsUi commitments={commitments} />}

    </>
    )
}
export default MyCommitments;