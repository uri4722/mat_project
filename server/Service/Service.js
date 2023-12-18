const { getPassedAway, newPassedAway } = require('../dataAccess/dataAccess');
const { tishreiToNissan } = require('./function');


const HDate = require('@hebcal/core').HDate;


async function getPassedAwayService() {
    const passedAway = await getPassedAway('passedAway');

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
    const res = await newPassedAway(
        ['manager_id', 'name', 'year_death', 'month_death', 'day_death', 'about', 'age', 'lonely', 'soldier', 'rabbi'],
        [manager_id, name, year_death, month_death, day_death, about, age, lonely, soldier, rabbi]
    );
    console.log(res);
}


module.exports = { getPassedAwayService, newPassedAwayService }