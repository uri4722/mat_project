import Filters from "../compnents/homeCompnent/Filters.jsx";
import PassedAwayCards from "../compnents/homeCompnent/PassedAwayCards.jsx";

// רשימה זמנית דומה למה שיגיע מהדאטה בייס
const passedAwayArray = [
    {
        pass_away_id: 1,
        manager_id: 1,
        name: 'First person',
        date: '01-01-2020',
        about: 'First person about',
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286",
        lonely: 1,
        soldier: 0,
        rabbi: 1,
        age: 70
    },
    {
        pass_away_id: 2,
        manager_id: 2,
        name: 'Second person',
        date: '02-02-2019',
        about: 'Second person about',
        img: null,
        lonely: 0,
        soldier: 1,
        rabbi: 0,
        age: 85
    },
    {
        pass_away_id: 3,
        manager_id: 3,
        name: 'Third person',
        date: '03-03-2012',
        about: 'Third person about',
        img: null,
        lonely: 1,
        soldier: 0,
        rabbi: 0,
        age: 60
    },
    {
        pass_away_id: 4,
        manager_id: 4,
        name: 'Fourth person',
        date: '04-04-2022',
        about: 'Fourth person about',
        img: null,
        lonely: 0,
        soldier: 1,
        rabbi: 1,
        age: 75
    },
    {
        pass_away_id: 5,
        manager_id: 5,
        name: 'Fifth person',
        date: '05-05-2022',
        about: 'Fifth person about',
        img: null,
        lonely: 1,
        soldier: 1,
        rabbi: 0,
        age: 80
    },
    // dsa
    {
        pass_away_id: 1,
        manager_id: 1,
        name: 'First person',
        date: '01-01-2020',
        about: 'First person about',
        img: null,
        lonely: 1,
        soldier: 0,
        rabbi: 1,
        age: 70
    },
    {
        pass_away_id: 2,
        manager_id: 2,
        name: 'Second person',
        date: '02-02-2019',
        about: 'Second person about',
        img: null,
        lonely: 0,
        soldier: 1,
        rabbi: 0,
        age: 85
    },
    {
        pass_away_id: 3,
        manager_id: 3,
        name: 'Third person',
        date: '03-03-2012',
        about: 'Third person about',
        img: null,
        lonely: 1,
        soldier: 0,
        rabbi: 0,
        age: 60
    },
    {
        pass_away_id: 4,
        manager_id: 4,
        name: 'Fourth person',
        date: '04-04-2022',
        about: 'Fourth person about',
        img: null,
        lonely: 0,
        soldier: 1,
        rabbi: 1,
        age: 75
    },
    {
        pass_away_id: 5,
        manager_id: 5,
        name: 'Fifth person',
        date: '05-05-2022',
        about: 'Fifth person about',
        img: null,
        lonely: 1,
        soldier: 1,
        rabbi: 0,
        age: 80
    },
    {
        pass_away_id: 1,
        manager_id: 1,
        name: 'First person',
        date: '01-01-2020',
        about: 'First person about',
        img: null,
        lonely: 1,
        soldier: 0,
        rabbi: 1,
        age: 70
    },
    {
        pass_away_id: 2,
        manager_id: 2,
        name: 'Second person',
        date: '02-02-2019',
        about: 'Second person about',
        img: null,
        lonely: 0,
        soldier: 1,
        rabbi: 0,
        age: 85
    },
    {
        pass_away_id: 3,
        manager_id: 3,
        name: 'Third person',
        date: '03-03-2012',
        about: 'Third person about',
        img: null,
        lonely: 1,
        soldier: 0,
        rabbi: 0,
        age: 60
    },
    {
        pass_away_id: 4,
        manager_id: 4,
        name: 'Fourth person',
        date: '04-04-2022',
        about: 'Fourth person about',
        img: null,
        lonely: 0,
        soldier: 1,
        rabbi: 1,
        age: 75
    },
    {
        pass_away_id: 5,
        manager_id: 5,
        name: 'Fifth person',
        date: '05-05-2022',
        about: 'Fifth person about',
        img: null,
        lonely: 1,
        soldier: 1,
        rabbi: 0,
        age: 80
    }
];

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Filters passedAwayArray={passedAwayArray} />
            <PassedAwayCards passedAwayArray={passedAwayArray} />
        </div>
    );
}
export default Home;