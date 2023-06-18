const { v3: uuid } = require("uuid");

const getUniqueID = () => {
    return uuid() + uuid();
};

module.exports = {
    getUniqueID,
};
