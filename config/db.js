const mysql = require('mysql')

const db = mysql.createConnection({
    user: 'sqluser',
    host: 'localhost',
    password: 'password',
    database: 'ems',
})

module.exports = db