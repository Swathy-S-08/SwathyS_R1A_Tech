import { DeleTask } from "./DeleteTask"
import { EditTasks } from "./EditTasks"


export const ToDo=({todo,index, handleEditTasks, handleDeleteTasks})=>{
    
    return(
        <div className="displayed">
            {todo.title}
            <EditTasks todo={todo} index={index} handleEditTasks={handleEditTasks} className='edit-buttn'/>
            <DeleTask todo={todo} index={index} handleDeleteTasks={handleDeleteTasks} className='delete-buttn'/>
        </div>
    )

}
