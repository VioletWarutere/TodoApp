const Todo = require("../models/todo");

const getTodos = async(req, res) => {
    const todos = await Todo.find({})
    res.send({ count: todos.length, todos: todos }).status(200)
}

const createTodo = async(req, res) => {
    const { title, status, start_date } = req.body

    if(!title || !status || !start_date) return res.status(401).send({ error: "Please provide all required fields" })

    try {
        const newTodo = new Todo({
            title: title,
            status: status,
            start_date: start_date
        })
        await newTodo.save()

        if(!newTodo) return res.status(400).send({ error: error.message })
        res.send(newTodo).status(201)

    } catch (error) {
        console.log({ error: error.message });
        return res.status(500).send({ error: error.message })
    }
}

const getTodoById = async(req, res) => {
    const { id } = req.params

    try {
        const todo = await Todo.findById({ "_id": id })
        if(!todo) return res.status(404).send({ error: `Todo with id: ${id} not found!!` })
        res.send(todo).status(200)
    } catch (error) {
        console.log({ error: error.message });
        return res.status(400).send({ error: error.message })
    }
}

const updateTodo = async(req, res) => {
    const { id } = req.params
    const { title, status, start_date } = req.body

    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id, { title: title, status: status, start_date: start_date }, { new: true });
        if(!updatedTodo) return res.status(404).send({ error: `Todo with id: ${id} not found!!` })

           
        
        res.status(200).send({'success': `Updated Todo ${updatedTodo}`});
    } catch (error) {
        console.log(error);
        return res.status(500).send({'error': error});
    }
}

const deleteTodo = async(req, res) => {
    const { id } =  req.params;
    try {
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if(!deletedTodo) return res.status(404).send({ error: `Todo with id: ${id} not found!!` })
        
        res.status(200).send({'success': `Deleted Todo ${deletedTodo}`});
    } catch (error) {
        console.log(error);
        return res.status(500).send({'error': error});
    }

}

module.exports = {
    getTodos,
    createTodo,
    getTodoById,
    updateTodo,
    deleteTodo
}