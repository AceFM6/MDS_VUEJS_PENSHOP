const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'boutique'
});

connection.connect((err) => {
    if (err) throw err;
    console.log("connecté à la base de données MySQL");
});

module.exports = connection;