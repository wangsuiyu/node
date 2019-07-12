var querystring = require('querystring')
var conn = require('./conn')

module.exports = {
    profileData(email, callback) {
        var sql = 'select * from users where email = ?'
        conn.query(sql, email, (err, results) => {
            if (err) return callback(err)
            callback(null, results)
        })
    },
    updateProfile(user, callback) {
        var {src, data} = user
        var info = querystring.parse(data)
        info.avatar = src
        let email = info.email
        delete info.email
        var sql = 'update users set ? where email = ? '
        conn.query(sql, [info, email], (err, results) => {
            if (err) return callback(err)
            callback(null)
        })
    },
    getPassword(email, callback) {
        //通过session的email来获取到数据库的数据
        var sql = 'select * from users where email = ?'
        conn.query(sql, email, (err, results) => {
            if (err) return callback(err)
            callback(null, results)
        })
    },
    passwordReset(email, passwordconfirm, callback) {
        //操作数据库重置密码
        var sql = 'update users set password = ? where email = ?'
        conn.query(sql, [passwordconfirm, email], (err, results) => {
            if (err) return callback(err)
            callback(null)
        })

    }
}