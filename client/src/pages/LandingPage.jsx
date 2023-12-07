import BGvideo from "../compnents/LandingPageCompnent/BGvideo";
import Header from "../compnents/LandingPageCompnent/Header";
import LandingPageContent from "../compnents/LandingPageCompnent/LandingPageContent";

function LandingPage() {
    return (
        <div>
            <Header />
            <BGvideo />
            <div className="landingPageContent">
                <LandingPageContent />
            </div>
        </div>
    );
}
export default LandingPage;