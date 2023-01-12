import React from 'react'

const Task = ({task , onDelete , onToggle})=> {
  return (
    <div 
        className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() =>onToggle(task.id)}>
        <div>
            <h3>{task.text}</h3>
            <p style={{fontFamily: 'monospace'}}>{task.day}</p>
        </div>
        <h3 onClick={() => onDelete(task.id)}><i style={{color: 'red'}} className="icon fa fa-times"></i></h3> 
    </div>
  )
}

export default Task