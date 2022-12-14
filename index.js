const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const initialization = require("./config/db");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

initialization();

app.get("/api/health", (req, res) => {
    res.send({
        time: new Date(),
        server: "Shuffle Backend",
        status: "Active"
    });
});

app.listen(8000, () => {
    console.log("Express server is running on port 8000");
});