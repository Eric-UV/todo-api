import db from '../common/base.repository';
import Todo from './todo';

export default {    
    async get (req, res) {
        let sql = 'Select * from todos';        
        let todos = await db.getAsync(sql);        
        return res.json(todos);
    },
    async post (req, res) {        
        try {
            let todo = new Todo();
            todo.setName(req.body.name);
            todo.setDate(req.body.date);
            let sql = `INSERT INTO todos (name, date) 
                        VALUES ('${ todo.getName() }', 
                        DATETIME('${ todo.getDate() }', 'localtime'))`;
            let lastId = await db.runAsync(sql);
            todo = new Todo();
            if (lastId != null || lastId != undefined)
            {
                sql = `SELECT * FROM todos WHERE id=${lastId}`;
                todo = await db.getOneAsync(sql);
            }

            return res.json(todo);
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    async delete (req, res) {
        try {
            let sql = `SELECT * FROM todos WHERE id=${req.body.id}`;
            let todo = await db.getAsync(sql);
            if (todo == null || todo == undefined) {
                return res.status(404).json({ msg: 'todo not found'});
            }
            sql = `DELETE FROM todos WHERE id=${req.body.id}`;
            db.runAsync(sql);
            return res.json({msg: 'success'});
        } catch (error) {
            return res.status(501).json(error);
        }
    }
};