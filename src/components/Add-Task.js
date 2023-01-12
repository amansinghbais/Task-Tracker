import React from 'react'
import { useState } from 'react'

function AddTask({onAdd}) {
  const [text , setText] = useState('')
  const [day , setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const submitTask = (e) =>{
    e.preventDefault()

    if(!text){
      alert('Please add a task')
      return
    }
    if(!day){
      alert('Please add a day')
      return
    }

    onAdd({text , day , reminder})
    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={submitTask}>
        <div className='form-control'>
            <label>Task</label>
            <input type="text" placeholder="Add Task" value={text} onChange={(e)=>setText(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>Date & Time</label>
            <input type="text" placeholder="Add Date & Time" value={day} onChange={(e)=>setDay(e.target.value)} />
        </div>
        <div className='form-control' style={{flexDirection: 'row'}}>
            <label>Set Reminder:</label>
            <input type="checkbox" className='taskCheckbox'  style={{marginLeft : '5px' , outline:'none',width:'20px',cursor:'pointer'}} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
        </div>
        <input className='saveTask' type="submit" value="Save Task" />
    </form>
  )
}

export default AddTask