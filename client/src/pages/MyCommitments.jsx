import { useEffect, useState } from "react";
import Header from "../components/navigtion/Header";
import usePermission from "../function/usePermission";
import { getMyCommitmentsApi } from "../function/fetchFunction";
import MyCommitmentsUi from "../components/ui/MyCommitmentsUi/MyCommitmentsUi";
import axios from "axios";
import DisplayMishnayot from "../components/ui/MyCommitmentsUi/DisplayMishnayot";

function MyCommitments() {
    let user = usePermission('user');
    const [open, setOpen] = useState(false);
    const [commitments, setCommitments] = useState([]);
    const [mishnayot, setMishnayot] = useState([]);


    const getMyCommitments = async () => {
        try {
            const data = await getMyCommitmentsApi(user?.user_id);
            setCommitments(data);
        }
        catch (err) {
            console.log(err);
        }

    }
    const getMishnayot = async (masechet) => {
        try {
            const { data } = await axios.get(`https://www.sefaria.org/api/texts/משנה ${masechet}?context=0&pad=0`);
            setMishnayot(data.he);
            setOpen(true);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMyCommitments();
        getMishnayot()

    }, [])




    return (<>
        <Header />
        {mishnayot && <DisplayMishnayot mishnayot={mishnayot} open={open} setOpen={setOpen} />}
        {user && <MyCommitmentsUi commitments={commitments} getMishnayot={getMishnayot} />}


    </>
    )
}
export default MyCommitments;