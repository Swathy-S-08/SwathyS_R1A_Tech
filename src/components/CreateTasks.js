import { useState } from "react";

export const CreateTasks=({handleCreateTasks})=>{
    const [addNewTask, setTask] = useState([]);
    const handlesubmit = (e) =>{
        e.preventDefault();
        if (!addNewTask) {
            return;
        }
        handleCreateTasks(addNewTask);
        setTask([]);
    }
    return (
        <form onSubmit={handlesubmit} className="todoForm">
            <label className="task">
                Add a task ♡
                <input type='text' className="todo-input" placeholder='Write your task here' value={addNewTask} onChange={(e) => setTask(e.target.value)}></input>
            </label>
            <button type='submit' className="todo-buttn">Add task</button>
        </form>
        )

}

