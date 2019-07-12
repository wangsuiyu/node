var conn = require('./conn')
module.exports = {
    userData(callback) {
        // var sql = 'select * from users'
        var sql = 'select * from users where isdel = 0'
        conn.query(sql, (err, results) => {
            if (err) return callback(err)
            callback(null, results)
        })
    },
    addUser(user, callback) {
        var sql = 'insert into users set ?'
        conn.query(sql, user, (err, results) => {
            if (err) return callback(err)
            callback(null)
        })
    },
    delUser(id, callback) {
        // var sql = 'delete from users where id = ?'
        var sql = 'update users set isdel = 1 where id = ?'
        conn.query(sql, id, (err, results) => {
            if (err) callback(err)
            callback(null)
        })
    },
    editData(id, callback) {
        var sql = 'select * from users where id = ?'
        conn.query(sql, id, (err, results) => {
            if (err) return callback(err)
            callback(null, results)
        })
    },
    editUser(user, callback) {
        var id = user.id
        delete user.id
        var sql = 'update users set ? where id = ?'
        conn.query(sql, [user,id], (err, results) => {
            if (err) return callback(err)
            callback(null)
        })
    },
    delDataUsers(id,callback){
        var sql = 'update users set isdel = 1 where id in (?)'
        conn.query(sql,[id],(err,results)=>{
            if(err) return callback(err)
            callback(null)
        })
    }
}