const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: 'beatshill_store'
})

connection.connect((err)=>console.log(err || 'Database Connected'))

module.exports = connection.promise()