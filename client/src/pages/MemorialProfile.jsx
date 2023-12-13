import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../compnents/navigtion/Header';
import MemorialProfileUi from '../compnents/ui/MemorialProfileUi/MemorialProfileUi';


//  הדמיה של הדאטה בייס
const db = [
    {
        pass_away_id: 1,
        manager_id: 1,
        name: 'John Doe',
        date: new Date().toLocaleDateString("en-US"),
        about: 'John Doe about',
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286",
        isLonely: 1,
        isSoldier: 0,
        isRabbi: 0,
        age: 70
    },
    {
        pass_away_id: 2,
        manager_id: 2,
        name: 'Jane Smith',
        date: '12/10/2024',
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
        date: '07/11/2023',
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
        date: '14/09/2023',
        about: 'Alice Williams about',
        img: null,
        isLonely: 0,
        isSoldier: 1,
        isRabbi: 0,
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
        isRabbi: 0,
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
        isRabbi: 0,
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

    {
        pass_away_id: 11,
        name: "הרב אברהם ישעיהו קרליץ",
        about: "החזון איש - מגדולי הפוסקים בדור הקודם",
        img: "https://www.yeshiva.org.il/wiki/images/thumb/c/c9/Hazon-Yish.jpg/200px-Hazon-Yish.jpg",
        date: "1953-10-15",
        age: 78,
        isLonely: false,
        isSoldier: false,
        isRabbi: true
    },
    {
        pass_away_id: 12,
        name: "הרב מרדכי אליהו",
        about: "הרב הראשי לישראל ופוסק הלכה בולט",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Mordechai_eliyahu.jpg",
        date: "2010-06-07",
        age: 88,
        isLonely: false,
        isSoldier: false,
        isRabbi: true
    },
    {
        pass_away_id: 13,
        name: "הרב עובדיה יוסף",
        about: "הראשון לציון ומחבר הספר ילקוט יוסף",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Harav_Ovadia_Yosef.JPG/800px-Harav_Ovadia_Yosef.JPG",
        date: "2013-10-07",
        age: 93,
        isLonely: false,
        isSoldier: false,
        isRabbi: true
    }, {
        pass_away_id: 14,
        name: "הרב יעקב ישראל קנייבסקי",
        about: "הסטייפלר - מנהיג חרדי ופוסק הלכה",
        img: "https://upload.wikimedia.org/wikipedia/en/4/45/Steipler_Gaon.jpg",
        date: "1985-11-11",
        age: 84,
        isLonely: false,
        isSoldier: false,
        isRabbi: true
    },
    {
        pass_away_id: 15,
        name: "הרב אליהו אליעזר דסלר",
        about: "משגיח ומנהיג רוחני",
        img: "https://upload.wikimedia.org/wikipedia/he/thumb/f/fb/%D7%94%D7%A8%D7%91_%D7%93%D7%A1%D7%9C%D7%A8.jpeg/375px-%D7%94%D7%A8%D7%91_%D7%93%D7%A1%D7%9C%D7%A8.jpeg",
        date: "1954-10-11",
        age: 63,
        isLonely: false,
        isSoldier: false,
        isRabbi: true
    },
    {
        pass_away_id: 16,
        name: "הרב שלמה זלמן אוירבך",
        about: "ראש ישיבת קול תורה",
        img: "https://upload.wikimedia.org/wikipedia/he/7/73/Orbach-1-.jpg",
        date: "1995-02-20",
        age: 86,
        isLonely: false,
        isSoldier: false,
        isRabbi: true
    },
    {
        pass_away_id: 17,
        name: "הרב יוסף שלום אלישיב",
        about: "ראש ישיבת פוניבז'",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2c/RavElyashiv21.JPG",
        date: "2012-03-18",
        age: 102,
        isLonely: false,
        isSoldier: false,
        isRabbi: true
    },
    {
        pass_away_id: 18,
        name: "הרב מנחם מנדל שניאורסון",
        about: "האדמו״ר מליובאוויטש",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Rabbi_Menachem_Mendel_Schneerson1A.jpg/375px-Rabbi_Menachem_Mendel_Schneerson1A.jpg",
        date: "1994-06-12",
        age: 92,
        isLonely: false,
        isSoldier: false,
        isRabbi: true
    },
    {
        pass_away_id: 19,
        name: "הרב בן ציון אבא שאול",
        about: "הרב הראשי לישראל וראש ישיבת פורת יוסף",
        img: "https://upload.wikimedia.org/wikipedia/he/1/15/Rabbi_BenZion_Aba_Shaul.jpeg",
        date: "1984-10-20",
        age: 74,
        isLonely: false,
        isSoldier: false,
        isRabbi: true
    },
    {
        pass_away_id: 20,
        name: "פרופסור נחום אליעזר גלטנר",
        about: "מגדולי הרבנים והרופאים",
        img: null,
        date: "1996-02-10",
        age: 76,
        isLonely: false,
        isSoldier: false,
        isRabbi: true
    }

];

function MemorialProfile() {
    const { id } = useParams();
    const [profile, setProfile] = useState({})
    useEffect(() => {
        // Your code here
        const res = db.find(p => p.pass_away_id === Number(id));
        res.mishnaiot = {
            Zeraim: [{ name: "Berakhot", learn: false },
            { name: "Peah", learn: false },
            { name: "Demai", learn: false },
            { name: "Kilayim", learn: false },
            { name: "Sheviit", learn: false },
            { name: "Terumot", learn: false },
            { name: "Maasrot", learn: false },
            { name: "Maaser Sheni", learn: false },
            { name: "Hallah", learn: false },
            { name: "Orlah", learn: false },
            { name: "Bikkurim", learn: false }],

            Moed: [{ name: "Shabbat", learn: false },
            { name: "Eruvin", learn: false },
            { name: "Pesahim", learn: false },
            { name: "Shekalim", learn: false },
            { name: "Yoma", learn: false },
            { name: "Sukkah", learn: false },
            { name: "Beitzah", learn: false },
            { name: "Rosh Hashanah", learn: false },
            { name: "Taanit", learn: false },
            { name: "Megillah", learn: false },
            { name: "Moed Katan", learn: false },
            { name: "Hagigah", learn: false }],

            Nashim: [{ name: "Yevamot", learn: false },
            { name: "Ketubot", learn: false },
            { name: "Nedarim", learn: false },
            { name: "Nazir", learn: false },
            { name: "Sotah", learn: false },
            { name: "Gittin", learn: false },
            { name: "Kiddushin", learn: false }],

            Nezikin: [{ name: "Bava Kamma", learn: false },
            { name: "Bava Metzia", learn: false },
            { name: "Bava Batra", learn: false },
            { name: "Sanhedrin", learn: false },
            { name: "Makkot", learn: false },
            { name: "Shevuot", learn: false },
            { name: "Eduyot", learn: false },
            { name: "Avodah Zarah", learn: false },
            { name: "Avot", learn: false },
            { name: "Horayot", learn: false }],
            Kodashim: [{ name: "Zevahim", learn: false },
            { name: "Menahot", learn: false },
            { name: "Hullin", learn: false },
            { name: "Bekhorot", learn: false },
            { name: "Arakhin", learn: false },
            { name: "Temurah", learn: false },
            { name: "Keritot", learn: false },
            { name: "Meilah", learn: false },
            { name: "Tamid", learn: false },
            { name: "Middot", learn: false },
            { name: "Kinnim", learn: false }],

            Taharot: [{ name: "Kelaim", learn: false },
            { name: "Oholot", learn: false },
            { name: "Negaim", learn: false },
            { name: "Parah", learn: false },
            { name: "Tohorot", learn: false },
            { name: "Mikvaot", learn: false },
            { name: "Niddah", learn: false },
            { name: "Makhshirin", learn: false },
            { name: "Zavim", learn: false },
            { name: "Tevul Yom", learn: false },
            { name: "Yadayim", learn: false },
            { name: "Uktzin", learn: false }]

        }
        setProfile(res);

    }, [])

    return (<>
        <Header />
        <div>
            <MemorialProfileUi profile={profile} />
        </div>
    </>
    );
}

export default MemorialProfile;