const fs = require("fs");


const readAllMessage = () => {
    try {
        const allRecord = fs.readFileSync(__dirname + '/messages.json');
        return allRecord;
    } catch (e) {
        console.log(e);
        return false;
    }
};
const saveMessage = allMessage => {
    try {
        fs.writeFileSync(__dirname + '/messages.json', JSON.stringify(allMessage)
        );
        return true;
    } catch (e) {
        return false;
    }
};

const deleteMessageById = () => { };

const getMessageById = () => { };

const updateMessageById = () => { };

module.exports = {
    readAllMessage,
    saveMessage,
    deleteMessageById,
    getMessageById,
    updateMessageById
};
