import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Header from '../compnents/navigtion/Header';
import MemorialProfileUi from '../compnents/ui/MemorialProfileUi/MemorialProfileUi';


function MemorialProfile() {
    const location = useLocation();
    const { passedAway } = location.state;
    console.log(location);
    // const { id } = useParams();
    const [profile, setProfile] = useState({})
    useEffect(() => {

        passedAway.mishnaiot = [
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

            [{ name: "כלים", learn: true },
            { name: "אוהלות", learn: false },
            { name: "נגעים", learn: false },
            { name: "פרה", learn: false },
            { name: "טהרות", learn: false },
            { name: "מקוואות", learn: false },
            { name: "נדה", learn: false },
            { name: "מכשירין", learn: false },
            { name: "זבים", learn: false },
            { name: "טבול יום", learn: false },
            { name: "ידיים", learn: false },
            { name: "עוקצים ", learn: false }

            ]
        ];

        passedAway.storys = [
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
        setProfile(passedAway);

    }, [passedAway])

    return (<>
        <Header />
        <div>
            <MemorialProfileUi profile={profile} />
        </div>
    </>
    );
}

export default MemorialProfile;