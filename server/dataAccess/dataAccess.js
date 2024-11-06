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
async function getUsers() {
    return await getRecordsSql('users');
}

async function updateUser(columns, values, id) {
    return await updateRowSql('users', "user_id", columns, values, id);
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

// async function getManager(email) {
//     return await getRecordsSql('managers', 'email', email);
// }
async function getManagerByUserId(id) {
    console.log("user_id =" + id);
    
    return await getRecordsSql('managers', 'user_id', id);
}

async function getManagerPassedAway(id) {
    return await getRecordsSql('passed_away', 'manager_id', id);
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
    getUsers,
    newStory,
    newCommitment,
    newUser,
    newManager,
    getManagerByUserId,
    getManagerPassedAway,
    updateUser,
    deleteStory,
    getMyCommitments,
    getPassedAwayByDate
};
