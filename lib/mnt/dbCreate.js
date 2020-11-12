const db = require('../db');

const dbCreate = () => {
    db.query("CREATE DATABASE cogs", (err, result) => {
        if (err) throw err;
        console.log("db created");
    });
};