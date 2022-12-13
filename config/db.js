const mongoose = require("mongoose");
const mongoUrl = process.env.MONGODB_URL;

function dbConnection() {
    mongoose.set("strictQuery", true);
    mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Database connected successfully :)");
    }).catch(error => {
        console.log(`Database not connected please try again error code: ${error}`);
    })
}

module.exports = dbConnection;