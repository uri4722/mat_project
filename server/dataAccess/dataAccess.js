const { insertRowSql, getRecordsSql } = require("./basicFunction");

async function getPassedAway(id) {
    if (id) {
        return await getRecordsSql('passed_away', 'passed_away_id', id);
    } else {
        return await getRecordsSql('passed_away');
    }
}

async function newPassedAway(keys, values) {
    return await insertRowSql('passed_away', keys, values);
}

async function getCommitments(id) {
    return await getRecordsSql('commitments', 'passed_away_id', id);
}

module.exports = { getPassedAway, newPassedAway, getCommitments };
