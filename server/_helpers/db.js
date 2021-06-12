const config = require('config.json');
const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, dbName: "test"};
mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
    Account: require("../accounts/account.model"),
    isValidId
};

function isValidId(id) {
    return mongoose.Types.ObjectId.isValid(id);
}