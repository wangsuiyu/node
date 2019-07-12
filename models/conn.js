var mysql = require('mysql')
var conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'baixiu32',
    dateStrings: true,
    multipleStatements:true
})
conn.connect()

module.exports = conn