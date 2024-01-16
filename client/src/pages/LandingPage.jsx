import Header from "../components/navigtion/Header";
import BGvideo from "../components/ui/LandingPageUi/BGvideo";
import LandingPageContent from "../components/ui/LandingPageUi/LandingPageContent";
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