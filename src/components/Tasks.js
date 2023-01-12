import Task from "./Task"

function Tasks({tasks , onDelete , onToggle}) {
  return (
    <div className='task-container'>
        
        {
            tasks.length > 0 ? '' : <p style={{textAlign: 'center',margin: '10px 0px'}}>----------- No Task -------------</p>
        }
        {tasks.map((task)=>(
            <Task task={task} key={task.id} onDelete={onDelete} onToggle={onToggle} />
        ))}
    </div>
  )
}

export default Tasks