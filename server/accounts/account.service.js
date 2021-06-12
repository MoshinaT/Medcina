const config = require('config.json');
const axios = require("axios");
const db = require("_helpers/db");
const Account = db.Account;

module.exports = {
    getAll,
    getByVal,
    newVal
};


async function getAll() {
    console.log("fun");
    let response = await axios.get(
        ` https://newsapi.org/v2/top-headlines?country=gb&category=general&apiKey=${config.APIKey}`
      );
     console.log(response.data);
    return response.data;
}

async function getByVal(val) {
    let response = await axios.get(
        `https://newsapi.org/v2/everything?q=${val}&sortBy=publishedAt&apiKey=${config.APIKey}`
      );
      console.log("ok")
    return response.data;
}

async function newVal(params) {
    console.log(params);
    const account = new Account(params);
    await account.save();
    return "Success"
}

