const mysql = require('mysql2/promise');

require('dotenv').config({ path: "./.env" });

const pool = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    database: process.env.database,
    password: process.env.password,
})

async function insertRow(table, columns, values) {
    console.log(table, columns, values);
    // Generic function to add a row in any table
    const sql = `INSERT INTO ${table} (${columns.join(',')})
    VALUES (?);`;

    const [res] = await pool.query(sql, [values]);
    const { insertId } = res;

    // return the new objact without calling the server
    const row = {};
    row.id = insertId;
    for (let i = 0; i < columns.length; i++) {
        row[columns[i]] = values[i];
    }
    return row;
}

async function getRecords(table, searchKey, searchValue, select) {
    const sql = `SELECT ${select ? select : "*"} FROM ${table} 
    ${searchKey ? `WHERE ${searchKey} = ?` : ";"}`;

    const [res] = await pool.query(sql, [searchValue])
    return res;
}

// async function deleteRaw(table, pkName, id) {
//     const sql = `DELETE FROM ${table} 
//     WHERE ${pkName} = ?`;
//     const [res] = await pool.query(sql, [id])

//     return res;
// }

// async function updateRaw(table, pkName, id, keyChange, valueChange) {
//     const sql = `UPDATE ${table}
// SET ${keyChange} = ${valueChange}
// WHERE ${pkName} = ?`;
//     const [res] = await pool.query(sql, [id])

//     return res;
// }

// async function userAuth(req, res, next) {
//     console.log(req.path);
//     if (req.path === '/login') {
//         next();
//     }

//     const { name, password } = req.cookies;
//     const [user] = await search('users', 'user_name', name);
//     if (user && password === user.password) {
//         next();
//     }
//     else res.status(401).send('not allowed');
// }

async function test() {
    try {
        console.log(await getRecords("passed_away"));
    } catch (error) {
        console.log(error);
    }
}
test()

// module.exports = { addRow, search, deleteRaw, updateRaw, userAuth }
module.exports = { insertRow, getRecords }