const mysql2 = require("mysql2");

const db = mysql2.createPool({
    host: "localhost",
    user: "root",
    password: "fourleaf0309!!",
    port: "3309",
    database: "un"
});

module.exports = db;