import Header from "../components/navigtion/Header";
import BGvideo from "../components/ui/LandingPageUi/BGvideo";
import LandingPageContent from "../components/ui/LandingPageUi/LandingPageContent";
import { getYahrzeitApi } from "../function/fetchFunction";
import yahrzeit from "../function/yahrzeit";
import { useEffect, useState } from "react";


function LandingPage() {
    const [yahrzeitList, setYahrzeitList] = useState([]);


    const getYahrzeit = async () => {
        const res = await getYahrzeitApi();
        setYahrzeitList(res);

    }

    useEffect(() => {
        getYahrzeit();
    }, [])


    return (
        <div>
            <Header />
            <BGvideo />
            <LandingPageContent  yahrzeitList={yahrzeitList} />

        </div>
    );
}
export default LandingPage;