const { get } = require('../dataAccess/dataAccess');

const HDate = require('@hebcal/core').HDate;



async function getPassedAwayRecords() {

    const passedAway = await get('passedAway');

    // Add Hebrew date to each record
    passedAway.forEach(passed => {
        const { day_death, month_death, year_death } = passed;

        const date = new HDate(new HDate(day_death, tishreiToNissan(month_death), year_death));
        passed.date = date.renderGematriya();
        delete passed.year_death;
        delete passed.month_death;
        delete passed.day_death;
    });
    return passedAway;
}

function tishreiToNissan(tishreiMonth) {
    return (tishreiMonth + 6) % 12;
}


module.exports = { getPassedAwayRecords }