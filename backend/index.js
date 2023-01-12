require('dotenv').config()
require('./db/config')
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const app = express()


app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

// Database Models
const Task = require('./db/model')


// Backend Requests

app.get('/tasks' , async (req , res)=>{
    const data = await Task.find({})
    res.json(data)
})

app.post('/tasks' , async (req , res)=>{
    const newTask = new Task(req.body)
    newTask.save()
    res.end()
})

app.delete('/tasks/:id' , async (req,res)=>{
    const id = req.params.id
    await Task.findOneAndDelete({id : id})

    res.end()
})

app.put('/tasks/:id' , async (req,res)=>{
    const id = Number(req.params.id)
    const task = await Task.findOne({id:id})
    var state = !task.reminder

    await Task.findOneAndUpdate({id:id} , {reminder : state})
    res.end()
})

app.listen(process.env.PORT , ()=>{
    console.log("App running at port " + process.env.PORT);
})