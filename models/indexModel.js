var conn = require('./conn')

module.exports = {
    getIndexData(callback){
        let sql = 'select count(*) as postsCount from posts ; select count(*) as draftedCount from posts where status = "drafted" ; select count(*) as catesCount from categories ; select count(*) as commentsCount from comments ; select count(*) as heldCount from comments where status = "held" ;'

        conn.query(sql,(err,results)=>{
            if(err) return callback(err)
            callback(null,results)
        })
    }
}