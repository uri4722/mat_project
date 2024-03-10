import HeaderNav from "../components/navigtion/HeaderNav";
import BGvideo from "../components/ui/LandingPageUi/BGvideo";
import LandingPageContent from "../components/ui/LandingPageUi/LandingPageContent";
import { Spinner } from "../components/ui/spinner/Spinner";
import { useFetchApiGet } from "../function/useFetchApiGet";


function LandingPage() {
    const [yahrzeitList, isLoading, error] = useFetchApiGet(`passedAway/yahrzeit`);
    error && console.log(error);

    return (
        <div>
            < HeaderNav />
            <BGvideo />
            {isLoading && <Spinner size={45} />}
            {yahrzeitList && <LandingPageContent yahrzeitList={yahrzeitList} />}

        </div>
    );
}
export default LandingPage;