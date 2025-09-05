export const DeleTask=({todo, index, handleDeleteTasks})=>{
    return(
        <div>
            <button className="delete-buttn" onClick={()=>handleDeleteTasks(index)}>
                Delete Task
            </button>


        </div>
    )
}