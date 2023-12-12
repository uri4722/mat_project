import Header from "../compnents/navigtion/Header";
import BGvideo from "../compnents/ui/LandingPageUi/BGvideo";
import LandingPageContent from "../compnents/ui/LandingPageUi/LandingPageContent";
import Hebcal from "hebcal";


function LandingPage() {
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