import Header from "../compnents/navigtion/Header";
import BGvideo from "../compnents/ui/LandingPageUi/BGvideo";
import LandingPageContent from "../compnents/ui/LandingPageUi/LandingPageContent";
import Hebcal from "hebcal";
import yahrzeit from "../function/yahrzeit";


function LandingPage() {
yahrzeit();
// console.log();

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