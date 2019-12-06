import sqlite from 'sqlite3';
import path from 'path';

const connString = path.join(path.dirname(require.main.filename), 'db/todos');

const db = new sqlite.Database(connString, sqlite.OPEN_READWRITE);

db.getAsync = function (sql) {    
    return new Promise(function (resolve, reject) {
        db.all(sql, function(err, rows) {
            if (err) {
                console.error(err.message);
                reject(err);
            }
            else {                
                resolve(rows);
            }
        });
    });
};

db.getOneAsync = function (sql) {
    return new Promise(function (resolve, reject) {
        db.get(sql, function(err, row) {
            if (err) {
                console.error(err.message);
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
};

db.runAsync = function (sql) {     
    return new Promise(function (resolve, reject) {
        db.run(sql, function (err) {
            if (err) {
                console.error(err.message);
                reject(err);
            } else {
                resolve(this.lastID);
            }
        });
    });
};

export default db;