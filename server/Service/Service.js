const e = require('express');
const {
    getPassedAway,
    newPassedAway,
    getCommitments,
    getStores,
    getUser,
    newCommitment,
    newStory,
    newUser,
    newManager,
    getManager,
    getManagerPassedAway,
    updateManager,
    deleteStory,
    getMyCommitments
} = require('../dataAccess/dataAccess');
const { tishreiToNissan, arrangeSqlDate } = require('./function');


// const HDate = require('@hebcal/core').HDate;
const gematriyaStrToNum = require('@hebcal/core').gematriyaStrToNum;


async function getPassedAwayService(id) {
    let passedAway;
    if (!id) {
        passedAway = await getPassedAway();

    } else {
        passedAway = await getPassedAway(id);
        passedAway[0].mishnaiot = await getCommitmentsService(id);
        passedAway[0].stores = await getStoresService(id);
    }

    // Add Hebrew date to each record
    passedAway.forEach(passed => {
        arrangeSqlDate(passed);
    });
    console.log(passedAway);
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

async function getStoresService(id) {
    const stores = await getStores(id);
    return stores;
}

async function newMemorialProfileService(id, memorialProfile) {
    const { email, password, masechtot, story } = memorialProfile;
    let user;
    try {
        user = await userAuth(email, password);
    }
    catch (error) {
        throw error;
    }
    if (!masechtot && !story) {
        throw "no memorial profile to add"
    }

    if (masechtot && masechtot.length > 0) {
        const todayISO = new Date().toISOString().slice(0, 10);
        await masechtot.forEach(async masechet => {
            const keys = ['passed_away_id', 'maschet', 'user_id', 'start_date'];
            const values = [id, masechet, user.user_id, todayISO];
            await newCommitment(keys, values);
        })
    }

    if (story.story) {
        const keys = ['passed_away_id', 'title', 'story', 'user_id'];
        const values = [id, story.title, story.story, user.user_id];
        const ans = await newStory(keys, values);
        ans.story_id = ans.id;
        delete ans.id;
        return ans;
    }
    return "success";
}

async function newUserService({ name, password, email }) {
    const keys = ['name', 'password', 'email'];
    const values = [name, password, email];
    const ans = await newUser(keys, values);
    console.log(ans);
    return ans;


}

async function newManagerService({ name, password, email, phone }) {
    const keys = ['name', 'password', 'email', 'phone'];
    const values = [name, password, email, phone];
    const ans = await newManager(keys, values);
    console.log(ans);
    return ans;
}

async function loginManagerService({ email, password }) {
    const [manager] = await getManager(email);
    console.log(manager);
    if (!manager) {
        throw { message: 'מייל לא קיים במערכת' }
    } else {
        if (password !== manager.password) {
            throw { message: 'סיסמא לא נכונה' };
        } else {
            return manager;
        }
    }

}

async function loginUserService({ email, password }) {
    try {
        user = await userAuth(email, password);
        return user;
    }
    catch (error) {
        throw error;
    }


}

async function getStoresService(id) {
    const stores = await getStores(id);
    return stores;
}

async function getManagerPassedAwayService(id) {
    const passedAwayList = await getManagerPassedAway(id);
    // Add Hebrew date to each record
    passedAwayList.forEach(passed => {
        arrangeSqlDate(passed);
    });
    // console.log(passedAwayList);
    return passedAwayList;
}

async function userAuth(email, password) {
    const [user] = await getUser(email);
    if (password !== user.password) {
        throw 'password is incorrect';
    } else {
        return user;
    }
}
async function updateManagerService(body, id) {
    const columns = ['name', 'password', 'email', 'phone'];
    const values = [body.name, body.password, body.email, body.phone];
    const ans = await updateManager(columns, values, id);
    console.log(ans);
    return ans;
}

async function deleteStoryService(id) {
    const ans = await deleteStory(id);
    return ans;
}

async function myCommitmentsService(id) {
    // get user commitments
    const commitments = await getMyCommitments(id);

    // arrange commitments by passed away
    let passedAwayId = commitments[0].passed_away_id;
    const myCommitments = [{ passedAwayName: passedAwayId, masechtot: [] }];
    index = 0;

    commitments.forEach(async commitment => {

        if (commitment.passed_away_id !== passedAwayId) {

            index++
            myCommitments[index] = { passedAwayName: "", masechtot: [] };
            passedAwayId = commitment.passed_away_id;
            myCommitments[index].passedAwayName = passedAwayId;
        }
        myCommitments[index].masechtot.push(commitment.maschet);
    })

    // turns id into name
    for (let i = 0; i < myCommitments.length; i++) {
        const passedAway = await getPassedAway(myCommitments[i].passedAwayName);
        myCommitments[i].passedAwayName = passedAway[0].name;
    }

    return myCommitments;

}

module.exports = {
    getPassedAwayService,
    newPassedAwayService,
    getCommitmentsService,
    getStoresService,
    newMemorialProfileService,
    newUserService,
    newManagerService,
    loginManagerService,
    loginUserService,
    getManagerPassedAwayService,
    updateManagerService,
    deleteStoryService,
    myCommitmentsService

}