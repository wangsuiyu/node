var conn = require('./conn')

module.exports = {
    getComments(currentPage,callback) {
        let pageSize = 10
        let pageIndex = (currentPage-1)*pageSize
        let sql = `select c.id,c.author,c.content,c.created,c.status,p.title from comments as c left join posts as p on c.post_id = p.id order by id desc limit ${pageSize} offset ${pageIndex};select count(*) as totalCount from comments`
        conn.query(sql,(err,results)=>{
            if(err) return callback(err)
            callback(null,results)
        })
    },
    delCommentData(id,callback){
        let sql = 'delete from comments where id = ?'
        conn.query(sql,id,(err,results)=>{
            if(err) return callback(err)
            callback(null)
        })
    },
    approvedComment(id,callback){
        let sql = 'update comments set status = "approved" where id = ?'
        conn.query(sql,id,(err,results)=>{
            if(err) return callback(err)
            callback(null)
        })
    },
    rejectedComment(id,callback){
        let sql = 'update comments set status = "rejected" where id = ?'
        conn.query(sql,id,(err,results)=>{
            if(err) return callback(err)
            callback(null)
        })
    },
    delMoreComments(id,callback){
        let sql = 'delete from comments where id in (?)'
        conn.query(sql,[id],(err,results)=>{
            if(err) return callback(err)
            callback(null)
        })
    },
    appMoreComments(id,callback){
        let sql = 'update comments set status ="approved" where id in (?)'
        conn.query(sql,[id],(err,results)=>{
            if(err) return callback(err)
            callback(null)
        })
    },
    recMoreComments(id,callback){
        let sql = 'update comments set status ="rejected" where id in (?)'
        conn.query(sql,[id],(err,results)=>{
            if(err) return callback(err)
            callback(null)
        })
    }
}