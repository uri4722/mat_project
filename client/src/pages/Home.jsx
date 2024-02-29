import { useEffect, useState } from "react";

import Hebcal from "hebcal";
import Header from "../components/navigtion/Header.jsx";
import PassedAwayCards from "../components/ui/homeUi/PassedAwayCards.jsx";
import Filters from "../components/ui/homeUi/Filters.jsx";

import { getAllPassedAwayApi } from "../function/fetchFunction.js";




function Home() {
    const [passedAwayArray, setPassedAwayArray] = useState([]);
    const [displayPassedAway, setDisplayPassedAway] = useState([]);

    const getPassedAwayArray = async () => {
        try {
            const data = await getAllPassedAwayApi();
            setPassedAwayArray(data);
            setDisplayPassedAway(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPassedAwayArray();
    }, [])

    useEffect(() => {
        setDisplayPassedAway(passedAwayArray);
    }, [passedAwayArray])

    const handeleSearch = (searchValue) => {
        const searchResult = passedAwayArray.filter(passed => passed.name.toLowerCase().includes(searchValue.toLowerCase()));
        setDisplayPassedAway(searchResult);
    }

    const handeleSelect = (selectValue) => {
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
    const handeleSort = (selectValue) => {
        let newSort = passedAwayArray.map(obj => ({ ...obj }));
        let compareFunction;
        switch (selectValue) {

            case "A-Z":
                compareFunction = (a, b) => a.name.localeCompare(b.name);
                break;
            case "Random":
                compareFunction = () => Math.random() - 0.5;
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
            <Header />
            <Filters
                passedAwayNames={passedAwayArray.map(passed => passed.name)}
                handeleSearch={handeleSearch}
                handeleSelect={handeleSelect}
                handeleSort={handeleSort}
            />
            <PassedAwayCards passedAwayArray={displayPassedAway} />
        </>
    );
}
export default Home;