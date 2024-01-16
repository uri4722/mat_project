import { useEffect, useState } from "react";
import Header from "../components/navigtion/Header";
import usePermission from "../function/usePermission";
import { getMyCommitmentsApi } from "../function/fetchFunction";
import MyCommitmentsUi from "../components/ui/MyCommitmentsUi/MyCommitmentsUi";

function MyCommitments() {
    const user = usePermission('user');
    const [commitments, setCommitments] = useState([]); // מערך של ההתחייבויות של המשתמש

    const getMyCommitments = async () => {
        const data = await getMyCommitmentsApi(user.user_id);
        setCommitments(data);

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
        <MyCommitmentsUi commitments={commitments} />

    </>
    )
}
export default MyCommitments;