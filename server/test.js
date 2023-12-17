require('dotenv').config();

const { getPassedAwayRecords } = require("./service/service");


function test() {
    try {
        getPassedAwayRecords()
    } catch (error) {
        console.log(error);
    }

}
test()