function tishreiToNissan(tishreiMonth) {
    return (tishreiMonth + 6) % 12;
}

function arrangeSqlDate(sqlDate) {
    const HDate = require('@hebcal/core').HDate;

    const { day_death, month_death, year_death } = sqlDate;


    const date = new HDate(new HDate(day_death, month_death, year_death));
    sqlDate.date = date.renderGematriya();
    delete sqlDate.month_death;
    delete sqlDate.day_death;
}



module.exports = { tishreiToNissan, arrangeSqlDate };