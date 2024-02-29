import Header from "../components/navigtion/Header";
import BGvideo from "../components/ui/LandingPageUi/BGvideo";
import LandingPageContent from "../components/ui/LandingPageUi/LandingPageContent";
import { getYahrzeitApi } from "../function/fetchFunction";
import { useEffect, useState } from "react";


function LandingPage() {
    const [yahrzeitList, setYahrzeitList] = useState([]);

    const getYahrzeit = async () => {
        try {
            const res = await getYahrzeitApi();
            setYahrzeitList(res);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getYahrzeit();
    }, [])


    return (
        <div>
            <Header />
            <BGvideo />
            <LandingPageContent yahrzeitList={yahrzeitList} />

        </div>
    );
}
export default LandingPage;