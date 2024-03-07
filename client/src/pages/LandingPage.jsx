import Header from "../components/navigtion/Header";
import BGvideo from "../components/ui/LandingPageUi/BGvideo";
import LandingPageContent from "../components/ui/LandingPageUi/LandingPageContent";
import { Spinner } from "../components/ui/spinner/Spinner";
import { useFetchApiGet } from "../function/useFetchApiGet";


function LandingPage() {
    const [yahrzeitList, isLoading, error] = useFetchApiGet(`passedAway/yahrzeit`);
    console.log(error);

    return (
        <div>
            <Header />
            <BGvideo />
            {isLoading && <Spinner size="45"/>}
            {yahrzeitList && <LandingPageContent yahrzeitList={yahrzeitList} />}

        </div>
    );
}
export default LandingPage;