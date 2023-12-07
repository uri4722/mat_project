import { useState } from "react";
import Filters from "../compnents/homeCompnent/Filters.jsx";
import PassedAwayCards from "../compnents/homeCompnent/PassedAwayCards.jsx";
import HeaderNav from "../compnents/navigtion/HeaderNav.jsx";

// רשימה זמנית דומה למה שיגיע מהדאטה בייס



function Home() {
    const passedAwayArray = [
        {
            pass_away_id: 1,
            manager_id: 1,
            name: 'John Doe',
            date: '01-01-2020',
            about: 'John Doe about',
            img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286",
            isLonely: 1,
            isSoldier: 0,
            isRabbi: 1,
            age: 70
        },
        {
            pass_away_id: 2,
            manager_id: 2,
            name: 'Jane Smith',
            date: '02-02-2019',
            about: 'Jane Smith about',
            img: null,
            isLonely: 0,
            isSoldier: 1,
            isRabbi: 0,
            age: 85
        },
        {
            pass_away_id: 3,
            manager_id: 3,
            name: 'Bob Johnson',
            date: '03-03-2012',
            about: 'Bob Johnson about',
            img: null,
            isLonely: 1,
            isSoldier: 0,
            isRabbi: 0,
            age: 60
        },
        {
            pass_away_id: 4,
            manager_id: 4,
            name: 'Alice Williams',
            date: '04-04-2022',
            about: 'Alice Williams about',
            img: null,
            isLonely: 0,
            isSoldier: 1,
            isRabbi: 1,
            age: 75
        },
        {
            pass_away_id: 5,
            manager_id: 5,
            name: 'Charlie Brown',
            date: '05-05-2022',
            about: 'Charlie Brown about',
            img: null,
            isLonely: 1,
            isSoldier: 1,
            isRabbi: 0,
            age: 80
        },
        {
            pass_away_id: 6,
            manager_id: 1,
            name: 'Eva Green',
            date: '06-06-2021',
            about: 'Eva Green about',
            img: null,
            isLonely: 1,
            isSoldier: 0,
            isRabbi: 1,
            age: 72
        },
        {
            pass_away_id: 7,
            manager_id: 2,
            name: 'Frank Miller',
            date: '07-07-2018',
            about: 'Frank Miller about',
            img: null,
            isLonely: 0,
            isSoldier: 1,
            isRabbi: 0,
            age: 88
        },
        {
            pass_away_id: 8,
            manager_id: 3,
            name: 'Grace Taylor',
            date: '08-08-2015',
            about: 'Grace Taylor about',
            img: null,
            isLonely: 1,
            isSoldier: 0,
            isRabbi: 0,
            age: 65
        },
        {
            pass_away_id: 9,
            manager_id: 4,
            name: 'Henry White',
            date: '09-09-2019',
            about: 'Henry White about',
            img: null,
            isLonely: 0,
            isSoldier: 1,
            isRabbi: 1,
            age: 78
        },
        {
            pass_away_id: 10,
            manager_id: 5,
            name: 'Isabel Black',
            date: '10-10-2020',
            about: 'Isabel Black about',
            img: null,
            isLonely: 1,
            isSoldier: 1,
            isRabbi: 0,
            age: 82
        },
        // Add more objects as needed
    ];
    const [displayPassedAway, setDisplayPassedAway] = useState(passedAwayArray);

    const handeleSearch = (searchValue) => {
        const searchResult = passedAwayArray.filter(passed => passed.name.toLowerCase().includes(searchValue.toLowerCase()));
        setDisplayPassedAway(searchResult);
    }

    const handeleSelect = (selectValue) => {
        if (selectValue === "") {
            console.log(passedAwayArray);
            setDisplayPassedAway(passedAwayArray);
            return;
        }
        const selectResult = passedAwayArray.filter(passed => passed[selectValue]);
        setDisplayPassedAway(selectResult);
    }

    return (
        <div>
            <HeaderNav />
            <Filters passedAwayNames={passedAwayArray.map(passed => passed.name)} handeleSearch={handeleSearch} handeleSelect={handeleSelect} />
            <PassedAwayCards passedAwayArray={displayPassedAway} />
        </div>
    );
}
export default Home;