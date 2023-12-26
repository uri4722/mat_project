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
async function getStorys(id) {
    return await getRecordsSql('storys', 'passed_away_id', id);

}
async function getUser(email) {
    return await getRecordsSql('users', 'email', email)
}
async function newCommitment(keys, values) {
    return await insertRowSql('commitments', keys, values);
}

async function newStory(keys, values) {
    return await insertRowSql('storys', keys, values);
}

async function newUser(keys, values) {
    return await insertRowSql('users', keys, values);
}
async function newManager(keys, values) {
    return await insertRowSql('managers', keys, values);
}

async function getManager(email) {
    return await getRecordsSql('managers', 'email', email);
}


module.exports = {
    getPassedAway,
    newPassedAway,
    getCommitments,
    getStorys,
    getUser,
    newStory,
    newCommitment,
    newUser,
    newManager,
    getManager
};
