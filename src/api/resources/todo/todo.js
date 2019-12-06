class Todo {    

    constructor() {}

    getDate() {
        return this.date;
    }

    setDate(date) {
        if (date == null || date == undefined) {
            throw Error('null date or undefined');
        }
        this.date = date;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        if (name == null || name == undefined) {
            throw Error('null name or undefined');
        }
        this.name = name;
    }
}

export default Todo;