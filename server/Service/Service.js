const { getPassedAway, newPassedAway, getCommitments, getStorys } = require('../dataAccess/dataAccess');
const { tishreiToNissan } = require('./function');


const HDate = require('@hebcal/core').HDate;
const gematriyaStrToNum = require('@hebcal/core').gematriyaStrToNum;


async function getPassedAwayService(id) {
    let passedAway;
    if (!id) {
        passedAway = await getPassedAway();

    } else {
        passedAway = await getPassedAway(id);
        passedAway[0].mishnaiot = await getCommitmentsService(id);
        passedAway[0].storys = await getStorysService(id);
    }

    // Add Hebrew date to each record
    passedAway.forEach(passed => {
        const { day_death, month_death, year_death } = passed;

        const date = new HDate(new HDate(day_death, month_death, year_death));
        passed.date = date.renderGematriya();
        delete passed.year_death;
        delete passed.month_death;
        delete passed.day_death;
    });
    return passedAway;
}


async function newPassedAwayService({ manager_id, name, year_death, month_death, day_death, about, age, lonely, soldier, rabbi }) {

    year_death = gematriyaStrToNum(year_death);
    const keys = ['manager_id', 'name', 'year_death', 'month_death', 'day_death', 'about', 'age', 'lonely', 'soldier', 'rabbi'];
    const values = [manager_id, name, year_death, month_death, day_death, about, age, lonely, soldier, rabbi];

    const res = await newPassedAway(keys, values);
    return res;
}

async function getCommitmentsService(id) {
    const mishnaiot = [
        [
            { name: "ברכות", alreadyTaken: false },
            { name: "פאה", alreadyTaken: false },
            { name: "דמאי", alreadyTaken: false },
            { name: "כלאים", alreadyTaken: false },
            { name: "שביעית", alreadyTaken: false },
            { name: "תרומות", alreadyTaken: false },
            { name: "מעשרות", alreadyTaken: false },
            { name: "מעשר שני", alreadyTaken: false },
            { name: "חלה", alreadyTaken: false },
            { name: "ערלה", alreadyTaken: false },
            { name: "ביכורים", alreadyTaken: false },
        ],
        [{ name: "שבת", alreadyTaken: false },
        { name: "עירובין", alreadyTaken: false },
        { name: "פסחים", alreadyTaken: false },
        { name: "שקלים", alreadyTaken: false },
        { name: "יומא", alreadyTaken: false },
        { name: "סוכה", alreadyTaken: false },
        { name: "ביצה", alreadyTaken: false },
        { name: "ראש השנה", alreadyTaken: false },
        { name: "תענית", alreadyTaken: false },
        { name: "מגילה", alreadyTaken: false },
        { name: "מועד קטן", alreadyTaken: false },
        { name: "חגיגה", alreadyTaken: false }
        ],

        [{ name: "יבמות", alreadyTaken: false },
        { name: "כתובות", alreadyTaken: false },
        { name: "נדרים", alreadyTaken: false },
        { name: "נזיר", alreadyTaken: false },
        { name: "סוטה", alreadyTaken: false },
        { name: "גיטין", alreadyTaken: false },
        { name: "קידושין", alreadyTaken: false }
        ],

        [
            { name: "בבא קמא", alreadyTaken: false },
            { name: "בבא מציעא", alreadyTaken: false },
            { name: "בבא בתרא", alreadyTaken: false },
            { name: "סנהדרין", alreadyTaken: false },
            { name: "מכות", alreadyTaken: false },
            { name: "שבועות", alreadyTaken: false },
            { name: "עדיות", alreadyTaken: false },
            { name: "עבודה זרה", alreadyTaken: false },
            { name: "אבות", alreadyTaken: false },
            { name: "הוריות", alreadyTaken: false }
        ],

        [{ name: "זבחים", alreadyTaken: false },
        { name: "מנחות", alreadyTaken: false },
        { name: "חולין", alreadyTaken: false },
        { name: "בכורות", alreadyTaken: false },
        { name: "ערכין", alreadyTaken: false },
        { name: "תמורה", alreadyTaken: false },
        { name: "כריתות", alreadyTaken: false },
        { name: "מעילה", alreadyTaken: false },
        { name: "תמיד", alreadyTaken: false },
        { name: "מדות", alreadyTaken: false },
        { name: "קנים", alreadyTaken: false },
        ],

        [{ name: "כלים", alreadyTaken: false },
        { name: "אוהלות", alreadyTaken: false },
        { name: "נגעים", alreadyTaken: false },
        { name: "פרה", alreadyTaken: false },
        { name: "טהרות", alreadyTaken: false },
        { name: "מקוואות", alreadyTaken: false },
        { name: "נדה", alreadyTaken: false },
        { name: "מכשירין", alreadyTaken: false },
        { name: "זבים", alreadyTaken: false },
        { name: "טבול יום", alreadyTaken: false },
        { name: "ידיים", alreadyTaken: false },
        { name: "עוקצים ", alreadyTaken: false }

        ]
    ];
    const commitments = await getCommitments(id);
    if (commitments.length > 0) {
        mishnaiot.forEach(seder => {
            seder.forEach(maschet => {
                commitments.forEach(commitment => {
                    if (commitment.maschet === maschet.name) {
                        maschet.alreadyTaken = true;
                    }
                })
            })
        })
    }
    return mishnaiot;
}

async function getStorysService(id) {
    const storys = await getStorys(id);
    return storys;
}

module.exports = { getPassedAwayService, newPassedAwayService, getCommitmentsService, getStorysService }