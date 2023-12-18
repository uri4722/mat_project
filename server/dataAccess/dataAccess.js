const { insertRowSql, getRecordsSql } = require("./basicFunction");

async function getPassedAway() {
    return await getRecordsSql('passed_away');
}

async function newPassedAway(keys, values) {
    return await insertRowSql('passed_away', keys, values);
}

module.exports = { getPassedAway, newPassedAway };
