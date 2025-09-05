export const EditTasks=({todo, handleEditTasks, index})=>{
    return(
        <div>
            <button className={todo.completed ? "completed-buttn":"edit-buttn"} onClick={()=>handleEditTasks(index)}>
                {
                    todo.completed ? "completed":"complete task"
                }
            </button>
        </div>
    )
}