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
        res.mishnaiot = [
            [
                { name: "ברכות", learn: true },
                { name: "פאה", learn: true },
                { name: "דמאי", learn: false },
                { name: "כלאים", learn: false },
                { name: "שביעית", learn: false },
                { name: "תרומות", learn: false },
                { name: "מעשרות", learn: false },
                { name: "מעשר שני", learn: false },
                { name: "חלה", learn: false },
                { name: "ערלה", learn: false },
                { name: "ביכורים", learn: false },
            ],
            [{ name: "שבת", learn: false },
            { name: "עירובין", learn: false },
            { name: "פסחים", learn: false },
            { name: "שקלים", learn: false },
            { name: "יומא", learn: false },
            { name: "סוכה", learn: false },
            { name: "ביצה", learn: false },
            { name: "ראש השנה", learn: false },
            { name: "תענית", learn: false },
            { name: "מגילה", learn: false },
            { name: "מועד קטן", learn: false },
            { name: "חגיגה", learn: false }
            ],

            [{ name: "יבמות", learn: false },
            { name: "כתובות", learn: false },
            { name: "נדרים", learn: false },
            { name: "נזיר", learn: false },
            { name: "סוטה", learn: false },
            { name: "גיטין", learn: false },
            { name: "קידושין", learn: false }
            ],

            [
                { name: "בבא קמא", learn: false },
                { name: "בבא מציעא", learn: false },
                { name: "בבא בתרא", learn: false },
                { name: "סנהדרין", learn: false },
                { name: "מכות", learn: false },
                { name: "שבועות", learn: false },
                { name: "עדיות", learn: false },
                { name: "עבודה זרה", learn: false },
                { name: "אבות", learn: false },
                { name: "הוריות", learn: false }
            ],

            [{ name: "זבחים", learn: false },
            { name: "מנחות", learn: false },
            { name: "חולין", learn: false },
            { name: "בכורות", learn: false },
            { name: "ערכין", learn: true },
            { name: "תמורה", learn: false },
            { name: "כריתות", learn: false },
            { name: "מעילה", learn: false },
            { name: "תמיד", learn: false },
            { name: "מדות", learn: false },
            { name: "קנים", learn: false },
            ],

            [{ name: "kelim", learn: true },
            { name: "ohalot", learn: false },
            { name: "negaim", learn: false },
            { name: "para", learn: false },
            { name: "taharot", learn: false },
            { name: "mikvaot", learn: false },
            { name: "nida", learn: false },
            { name: "machshirin", learn: false },
            { name: "zavim", learn: false },
            { name: "tevulYom", learn: false },
            { name: "yadayim", learn: false },
            { name: "oktzin", learn: false },
            ]
        ];

        res.storys = [
            {
                title: "הצדקה של ר' משה",
                content: "פעם, ר' משה היה מסתובב ברחובות העיר ומחלק מטבעות לעניים. הוא היה אומר להם: 'אני מודה לכם שנותנים לי את הזכות לתרום לצדקה.'",
                gmail: "avi@gmail.com "
            },
            {
                title: "החסד של ר' משה",
                content: "ביום אחד, ר' משה ראה איש זקן שנכשל ברחוב. הוא עזר לו להתאושש, ואז הציע לו להכין לו ארוחה בביתו.",
                gmail: "or@gmail.com"
            },
            {
                title: "התפילה של ר' משה",
                content: "ר' משה היה מתפלל בכוונה גדולה. פעם, בעת שהיה מתפלל, הוא פתאום פתח את עיניו ואמר: 'אני מרגיש שכל תפילה שלי משנה את העולם לטובה.'",
                gmail: "uri@gmail.com"

            },
            {
                title: "התורה של ר' משה",
                content: "ר' משה היה אוהב את התורה. פעם, בעת שהיה לומד, הוא הפסיק, הסתכל בעיניים מבריקות ואמר: 'אין דבר יותר מרגש מללמוד תורה.'",
                gmail: "yael@gmail.com"
            }
        ];
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