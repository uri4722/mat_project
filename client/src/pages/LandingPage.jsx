import Header from "../components/navigtion/Header";
import BGvideo from "../components/ui/LandingPageUi/BGvideo";
import LandingPageContent from "../components/ui/LandingPageUi/LandingPageContent";
import { getYahrzeitApi } from "../function/fetchFunction";
import Hebcal from "hebcal";
import yahrzeit from "../function/yahrzeit";
import { useEffect } from "react";


function LandingPage() {
    // yahrzeit();
    // console.log();
    const getYahrzeit = async () => {
        const a = await getYahrzeitApi();
        console.log(a);

    }

    useEffect(() => {
        getYahrzeit();
    }, [])

    const heToday = new Hebcal.HDate().toString('h');

    return (
        <div>
            <Header />
            <BGvideo />
            <LandingPageContent heToday={heToday} />

        </div>
    );
}
export default LandingPage;