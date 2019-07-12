var conn = require('./conn')

module.exports = {
    comeIndex(user,callback){
        let {email,password} = user
        var sql = 'select * from users where email = ? and password = ?'
        conn.query(sql,[email,password],(err,results)=>{
            if(err) return callback(err)
            callback(null,results)
        })
    }
}