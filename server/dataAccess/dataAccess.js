const { insertRowSql, getRecordsSql, updateRowSql, deleteRawSql } = require("./basicFunction");

async function getPassedAway(id) {
    if (id) {
        return await getRecordsSql('passed_away', 'passed_away_id', id);
    } else {
        return await getRecordsSql('passed_away');
    }
}
async function getPassedAwayByDate(dd,mm) {
        return await getRecordsSql('passed_away','day_death' ,dd,null,null,'month_death',mm);
  
}


async function newPassedAway(keys, values) {
    return await insertRowSql('passed_away', keys, values);
}

async function getCommitments(id) {
    return await getRecordsSql('commitments', 'passed_away_id', id);
}
async function getStores(id) {
    return await getRecordsSql('stores', 'passed_away_id', id);

}
async function getUser(email) {
    return await getRecordsSql('users', 'email', email)
}
async function newCommitment(keys, values) {
    return await insertRowSql('commitments', keys, values);
}

async function newStory(keys, values) {
    return await insertRowSql('stores', keys, values);
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

async function getManagerPassedAway(id) {
    return await getRecordsSql('passed_away', 'manager_id', id);
}
async function updateManager(columns, values, id) {
    return await updateRowSql('managers', "manager_id", columns, values, id);
}

async function deleteStory(id) {
    return await deleteRawSql('stores', 'story_id', id);
}

async function getMyCommitments(id) {
    return await getRecordsSql('commitments', 'user_id', id, null, 'passed_away_id');

}



module.exports = {
    getPassedAway,
    newPassedAway,
    getCommitments,
    getStores,
    getUser,
    newStory,
    newCommitment,
    newUser,
    newManager,
    getManager,
    getManagerPassedAway,
    updateManager,
    deleteStory,
    getMyCommitments,
    getPassedAwayByDate
};
