const mongoose = require("mongoose");

const dbServerUrl = "mongodb+srv://aryan:aryan@aryandb.72kyzaf.mongodb.net/?retryWrites=true&w=majority";

function dbConnection() {
    mongoose.set("strictQuery", true);
    mongoose.connect(dbServerUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to mongoDB successfully");
    })
    .catch(error => {
        console.log(`Something went wrong error code: ${error}`);
    })

}

module.exports = dbConnection