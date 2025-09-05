import { useState } from "react";
import { ToDo } from "./components/ToDo";
import { CreateTasks } from "./components/CreateTasks";
import "./App.css";

function App() {
  const DataEntry=[];
  const [todo,todoset] = useState(DataEntry);
  const handleCreateTasks = (newTasks)=>{
    const newToDoTask=[...todo,{title:newTasks,completed:false}]
      todoset(newToDoTask);}
  
  const handleEditTasks=(index)=>{
    const newToDoTask=[...todo];
    newToDoTask[index].completed=true;
    todoset(newToDoTask);}
  
  const handleDeleteTasks=(index)=>{
    const newToDoTask=[...todo];
    newToDoTask.splice(index,1);
    todoset(newToDoTask);

  }
  
  
  return (
    <div className="App">
      <h1>To Do List</h1>
      {
      todo.map((todo,index)=>(
      <ToDo index={index} todo={todo} handleEditTasks={handleEditTasks} handleDeleteTasks={handleDeleteTasks}/>
      ))}
      <div className='todo-input'>
        <CreateTasks handleCreateTasks={handleCreateTasks}/>
      </div>
    </div>
  );
}

export default App;
