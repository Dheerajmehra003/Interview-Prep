import React, { useState } from 'react'

const TodoList = () => {
    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState([])
    const [editingIndex, setEditingIndex] = useState(null)
    const [editTask, setEditTask] = useState('')

    const addTask = (e) => {
        e.preventDefault()
        setTasks([...tasks, {input:newTask}])
        setNewTask('')
    }

    const removeTask = (index) => {
        const updatedTask = tasks.filter((task, i ) => i !== index)
        setTasks(updatedTask)
    }

    const startEditing = (index) => {
        setEditingIndex(index)
        setEditTask(tasks[index].input)
    }

    const saveEdit = () => {
        const updatedTask = tasks
        updatedTask[editingIndex].input = editTask
        setTasks(updatedTask)
        setEditingIndex(null)
        setEditTask('')
    }

   return (
    <div>
        <form>
            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <button onClick={addTask}>add</button>
        </form>
        <ul>
            {
                tasks.map((item, index)=>{
                    return(
                        <li key={index}>
                            {
                               editingIndex === index ? 
                               <div>
                                 <input type="text" value={editTask} onChange={(e) => setEditTask(e.target.value)} />
                                 <button onClick={saveEdit}>save</button>
                               </div>
                               :
                            <>
                            <span>{item.input}</span>
                            <button onClick={()=>startEditing(index)}>edit</button>
                            <button onClick={()=>removeTask(index)}>delete</button>
                            </>
                            }
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default TodoList