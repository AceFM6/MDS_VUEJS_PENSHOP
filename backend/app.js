const express = require("express");
const database = require ("./db");
const cors = require ("cors");

const app = express();

var corsOption = {
    origin: "http://localhost:8080"
};

app.use((req, res) => {
    console.log("test");
    res.status(200);
    res.json({
        message: "premier message"
    });
});

module.exports = app;