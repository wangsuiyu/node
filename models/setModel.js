var conn = require('./conn')

module.exports = {
    getNavMenusData(callback) {
        let sql = "select `value` from options where `key` = 'nav_menus'"
        conn.query(sql, (err, results) => {
            if (err) return callback(err)
            callback(null, results)
        })
    },
    addNavMenus(nav, callback) {
        this.getNavMenusData((err, data) => {
            if (err) return console.log(err.message);
            let arr = JSON.parse(data[0].value)
            arr.push(nav)
            let str = JSON.stringify(arr)
            let sql = 'update options set `value` = ? where `key` = "nav_menus"'
            conn.query(sql, [str], (err, results) => {
                if (err) return callback(err)
                callback(null)
            })
        })
    },
    delNavMenus(id, callback) {
        this.getNavMenusData((err, data) => {
            if (err) return console.log(err.message);
            var arr = JSON.parse(data[0].value)
            arr.some((item, index) => {
                if (id == index) {
                    arr.splice(id, 1)
                    return true
                }
            })
            let str = JSON.stringify(arr)
            let sql = "update options set `value` = ? where `key` = 'nav_menus'"
            conn.query(sql, [str], (err, results) => {
                if (err) return callback(err)
                callback(null)
            })
        })
    },
    getSlidesData(callback) {
        let sql = 'select `value` from options where `key` = "home_slides"'
        conn.query(sql, (err, results) => {
            if (err) return callback(err)
            callback(null, results)
        })
    },
    addSlides(slides, callback) {
        this.getSlidesData((err, data) => {
            if (err) return console.log(err.message);
            let arr = JSON.parse(data[0].value)
            arr.push(slides)
            let str = JSON.stringify(arr)
            let sql = 'update options set `value` = ? where `key` = "home_slides"'
            conn.query(sql, [str], (err, results) => {
                if (err) return callback(err)
                callback(null)
            })
        })
    },
    delSlides(id, callback) {
        this.getSlidesData((err, data) => {
            if (err) return console.log(err.message);
            let arr = JSON.parse(data[0].value)
            arr.some((item, index) => {
                if (id == index) {
                    arr.splice(id, 1)
                    return true
                }
            })
            let str = JSON.stringify(arr)
            let sql = 'update options set `value` = ? where `key` = "home_slides"'
            conn.query(sql, [str], (err, results) => {
                if (err) return callback(err)
                callback(null)
            })
        })
    },
    getSettingsData(callback) {
        let sql = 'select `value` from options where id<9'
        conn.query(sql, (err, results) => {
            if (err) return callback(err)
            callback(null, results)
        })
    },
    updateSettingsData(set, callback) {
        let sql = ""
        for (let key in set) {
            if(key == "site_logo"){
                set[key] = set[key].replace(/\\/g,"/")
            }
            // sql += 'update options set `value` = "' + set[key] + '" where `key` = "' + key + '";'
            sql += 'update options set `value` = "' + set[key] + '" where `key` = "' + key + '";'
        }
        conn.query(sql, (err, results) => {
            if (err) return callback(err)
            callback(null)
        })
    }

}