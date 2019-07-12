var conn = require('./conn')

var cateModel = require('./cateModel')

module.exports = {
    getCateData(callback){
        cateModel.getData((err,results)=>{
            if(err) return callback(err)
            callback(null,results)
        })
    },
    postAddData(art,callback){
        let sql = 'insert into posts set ?'
        conn.query(sql,art,(err,results)=>{
            if(err) return callback(err)
            callback(null)
        })
    },
    getPostAllData(currentPage,callback){
        let pageCount = 10
        let offset = (currentPage-1)*pageCount
        let sql = `select p.id,p.slug,p.title,p.status,p.created,u.nickname,c.name from posts as p LEFT JOIN users as u on p.user_id = u.id LEFT JOIN categories as c on p.category_id = c.id ORDER BY id desc limit ${pageCount} offset ${offset};select count(*) as totalCount from posts;`
        conn.query(sql,(err,results)=>{
            if(err) callback(err)
            callback(null,results)
        })
    },
    delpostsData(id,callback){
        let sql = 'delete from posts where id = ?'
        conn.query(sql,id,(err,results)=>{
            if(err) return callback(err)
            callback(null)
        })
    },
    getEditPostData(id,callback){
        let sql = 'select * from posts where id = ?;select * from categories'
        conn.query(sql,id,(err,results)=>{
            if(err) return callback(err)
            callback(null,results)
        })
    },
    updatePostsData(post,callback){
        let {id} = post
        delete post.id
        let sql = 'update posts set ? where id = ?'
        conn.query(sql,[post,id],(err,results)=>{
            if(err) return callback(err)
            callback(null)
        })
    },
    getHeadDate(callback){
        let sql = 'select name from categories ;'
        conn.query(sql,(err,results)=>{
            if(err) return callback(err)
            callback(null,results)
        })
    }
}