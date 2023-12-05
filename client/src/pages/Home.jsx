import ListPassedAway from "../compnents/homeCompnent/ListPassedAway.jsx";

// רשימה זמנית דומה למה שיגיע מהדאטה בייס
const passedAwayArray = [
    {
        pass_away_id: 1,
        manager_id: 1,
        name: 'First person',
        date: '2022-01-01',
        about: 'First person about',
        img: 'image1.jpg',
        lonely: 1,
        soldier: 0,
        rabbi: 1,
        age: 70
    },
    {
        pass_away_id: 2,
        manager_id: 2,
        name: 'Second person',
        date: '2022-02-02',
        about: 'Second person about',
        img: 'image2.jpg',
        lonely: 0,
        soldier: 1,
        rabbi: 0,
        age: 85
    },
    {
        pass_away_id: 3,
        manager_id: 3,
        name: 'Third person',
        date: '2022-03-03',
        about: 'Third person about',
        img: 'image3.jpg',
        lonely: 1,
        soldier: 0,
        rabbi: 0,
        age: 60
    },
    {
        pass_away_id: 4,
        manager_id: 4,
        name: 'Fourth person',
        date: '2022-04-04',
        about: 'Fourth person about',
        img: 'image4.jpg',
        lonely: 0,
        soldier: 1,
        rabbi: 1,
        age: 75
    },
    {
        pass_away_id: 5,
        manager_id: 5,
        name: 'Fifth person',
        date: '2022-05-05',
        about: 'Fifth person about',
        img: 'image5.jpg',
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
            <ListPassedAway passedAwayArray={passedAwayArray} />
        </div>
    );
}
export default Home;