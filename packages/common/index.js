
const {v4 : uuid} = require("uuid");

const getUniqueID = () => {
    return uuid() + "-lerna"
};


module.exports = {
    getUniqueID
}
