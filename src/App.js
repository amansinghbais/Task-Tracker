import {useEffect, useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/Add-Task'

const URL = process.env.REACT_APP_API_URL

function App() {

  // React useState Hooks--------------------------
  const [showAddTask , setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  
  // useEffect hook - It do things first to be done after rendering such as fetching data
  useEffect(()=>{
    const getTasks = async () =>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
  }

  getTasks()
},[])

// Fetch all Tasks Function
const fetchTasks = async () =>{
  const res = await fetch(`${URL}/tasks`)
  const data = await res.json()

  return data
}

// Toggle New Task Form Function
const showForm = (e) =>{
  e.preventDefault()
  setShowAddTask(!showAddTask)
}

// Delete a Task
const deleteTask = async (id) =>{
  await fetch(`${URL}/tasks/${id}` ,{
    method : 'DELETE'
  })
  
  setTasks(tasks.filter((task) => task.id !== id))
}

// Task Reminder toggle Function
const reminderToggle = async (id) =>{
  await fetch(`${URL}/tasks/${id}` ,{
    method : 'PUT'
  })
  setTasks(tasks.map((task) => 
      task.id === id ? {...task , reminder: !task.reminder} : task
    )
  )
}

// New Task submit function
const addTask = async (text)=>{
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id , ...text}

  await fetch(`${URL}/tasks`,{
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(newTask)
  })

  setTasks([...tasks , newTask])
}


  return (
    <div className="App">
        <div className='app-container'>  
          <Header onClick = {showForm} formShown={showAddTask} />
          { showAddTask && <AddTask onAdd = {addTask} />}
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={reminderToggle} />
        </div>
    </div>
  ); 
}

export default App;
