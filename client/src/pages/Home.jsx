import { useEffect, useState } from "react";
import Hebcal from "hebcal";
import PassedAwayCards from "../components/ui/homeUi/PassedAwayCards.jsx";
import Filters from "../components/ui/homeUi/Filters.jsx";

import { useNavigate } from "react-router-dom";
import HeaderNav from "../components/navigtion/HeaderNav.jsx";
import { useFetchApiGet } from "../function/useFetchApiGet.js";
import { Spinner } from "../components/ui/spinner/Spinner.js";

function Home() {
    const navigate = useNavigate();

    const [passedAwayArray, isLoading, error] = useFetchApiGet("passedAway");
    const [displayPassedAway, setDisplayPassedAway] = useState([]);
    error && navigate("/error");



    useEffect(() => {
        const startDisplayPassedAway = () => {
            if (!isLoading) {
                setDisplayPassedAway(passedAwayArray);
            }
        }

        startDisplayPassedAway();
    }, [passedAwayArray, isLoading]);


    const handleSearch = (searchValue) => {
        console.log('searchValue = ', searchValue);
        
        const searchResult = passedAwayArray.filter(passed => passed.name.toLowerCase().includes(searchValue.toLowerCase()));
        setDisplayPassedAway(searchResult);
    }

    const handleSelectType = (selectValue) => {
        if (selectValue === "") {
            setDisplayPassedAway(passedAwayArray);
            return;
        }

        if (selectValue === "Yahrzeit") {
            // צריך להמיר את התאריך לתאריך עברי
            const HEtoday = new Hebcal.HDate();

            // ולבדוק אם היום הוא יום השנה
            const selectResult = passedAwayArray.filter(passed => {
                const HEdate = new Hebcal.HDate(new Date(passed.date));

                return HEdate.day === HEtoday.day && HEdate.month === HEtoday.month;
            });
            setDisplayPassedAway(selectResult);
            return;

            // לבדוק שוב אחרי שאני בונה שרת
            // תלוי בשיטת התאריך בדאטה בייס
        }

        const selectResult = passedAwayArray.filter(passed => passed[selectValue]);
        setDisplayPassedAway(selectResult);
    }
    const handleSort = (selectValue) => {
        console.log(selectValue);
        
        console.log("handleSort");
        
        let newSort = displayPassedAway.map(obj => ({ ...obj }));
        let compareFunction;
        switch (selectValue) {

            case "A-Z":
                compareFunction = (a, b) => a.name.localeCompare(b.name);
                break;
            case "Random":
                newSort = newSort.map(obj => ({ ...obj, randomKey: Math.random() }));
                compareFunction = (a, b) => a.randomKey - b.randomKey;
                break;                
            case "youngest":
                compareFunction = (a, b) => a.age - b.age;
                break;
            case "Oldest":
                compareFunction = (a, b) => b.age - a.age;
                break;

            default:
                compareFunction = (a, b) => 0;
        }
        newSort.sort(compareFunction);
        setDisplayPassedAway(newSort);
    }

    return (
        <>
            < HeaderNav />
            {passedAwayArray ? <>
                <Filters
                    passedAwayNames={displayPassedAway.map(passed => passed.name)}
                    handleSearch={handleSearch}
                    handleSelectType={handleSelectType}
                    handleSort={handleSort}
                />
                <PassedAwayCards passedAwayArray={displayPassedAway} />
            </> :
                <Spinner size={200} color={"Wheat"} />}

        </>
    );
}
export default Home;