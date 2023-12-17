const { getRecords } = require("./basicFunction");

async function get(get) {
    switch (get) {
        case "passedAway":
           return await getRecords('passed_away');
        default:
            throw new Error("get function not found");
    }
}

module.exports = { get };
