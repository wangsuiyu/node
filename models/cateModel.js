var conn = require('./conn')
module.exports = {
    getData(callback){
        var sql = 'select * from categories where isdel = 0'
        conn.query(sql,(err,results)=>{
            if(err) return callback(err)
            callback(null,results)
        })
    },
    addCate(cate,callback){
        var sql = 'insert into categories set ?'
        conn.query(sql,cate,(err,results)=>{
            if(err) return callback(err)
            callback(null)
        })
    },
    delCate(id,callback){
        var sql = 'update categories set isdel = 1 where id = ?'
        conn.query(sql,id,(err,results)=>{
            if(err) return callback(err)
            callback(null)
        })
    },
    getEdit(id,callback){
        var sql = 'select * from categories where id = ?'
        conn.query(sql,id,(err,results)=>{
            if(err) return callback(err)
            callback(null,results)
        })
    },
    editCate(cate,callback){
        let id = cate.id
        delete cate.id
        var sql = 'update categories set ? where id = ?'
        conn.query(sql,[cate,id],(err,results)=>{
            if(err) return callback(err)
            callback(null)
        })
    },
    delMoreCate(id,callback){
        var sql = 'update categories set isdel = 1 where id in (?)'
        conn.query(sql,[id],(err,results)=>{
            if(err) return callback(err)
            callback(null)
        })
    }
}