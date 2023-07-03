const { v4: uuid } = require("uuid");

const getUniqueID = () => {
    return uuid();
};

module.exports = {
    getUniqueID,
};
