DB = new Object()

const sqlite3 = require('sqlite3').verbose()

db_main = new sqlite3.Database('./DB/DB_main')


// ========== mainDB ==========

DB.setDB = async function setDB(key,value){

    db_main.run(`REPLACE INTO mainDB (key,value) VALUES(?,?)`, [key, value],
        (err)=>{if (err) {console.log("setDB error : " + err.toString() + "\n\ntableName : " + "UOSTIME" + "\n\ndata : " + data )}}) ;
    //(err)=>{if (err) {}}) ;

}

DB.getDB = async function getDB(key){

    let a =  await new Promise((resolve, reject) => {
        db_main.get(`select * from mainDB where key = ?`, [key], (err, row) => {
            if (err) {
                reject(err)
            } else {
                resolve(row)
            }
        })
    })

    try{
        return a.value
    }
    catch(e){
        return undefined
    }

}



/*
    1. create table
    db_main.run('CREATE TABLE mainDB (key text primary key, value text)')

    2. data set
    db_main.run(`REPLACE INTO mainDB (key, value) VALUES(?,?)`, data,
        (err)=>{if (err) {botChannel.sendText("UOSTime_setDB_TEST error : " + err.toString() + "\n\ntableName : " + "UOSTIME_TEST" + "\n\ndata : " + data )}}) ;

    3. data get
    new Promise((resolve, reject) => {
        db_UOSTime.get(`select * from UOSTIME_TEST where key = ?`, [key], (err, row) => {
            if (err) {
                reject(err)
            } else {
                resolve(row)
            }
        })
    })


 */


module.exports = DB


