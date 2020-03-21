const express = require("express")
const app = express()
const uuid = require("uuid/v4")

app.use(express.json())



const todo = [
    { 
    name: "My Name",
    description: "The description of the todo",
    imageURL: "http://www.myimage....",
    completed: false,
    _id: "23k41h23h2"()
    }
]


app.get("/todo", (req, res) => {
    res.send(todo)
})


app.get("/:todo", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todo.find(todo => todo._id === todoId)
    res.set(foundTodo)
})



app.post("/todo", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuid()
    todo.push(newTodo)
    res.send(`Successfully added ${newTodo.name} to the database`)
})



app.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const updateObject = req.body
    const todoIndex = todos.findIndex(todo = todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], updateObject)
    res.send(updatedTodo)
})



app.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Successfully deleted Todo!")
})

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})