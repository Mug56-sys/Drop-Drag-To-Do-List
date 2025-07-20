import { useEffect, useState } from "react";

type Tasks={
  id:number;
  text:string;
  status:string;
}

export default function Adding() {
  const [task,setTask]=useState<string>('') 
 const [tasks,setTasks]=useState<Tasks[]>([]) 

 const handleClick=(e: React.ChangeEvent<HTMLInputElement>)=>{
  setTask(e.target.value)
 }
 const AddTask=()=>{
  const newTask={
    id:tasks.length,
    text:task,
    status:"to-do"}
  setTasks([...tasks,newTask])
  setTask('')
 }
 useEffect(()=>{
    console.log(tasks)
},[task])

  return (
    <div className="text-sm pt-5">
      <input className="border rounded-3xl p-1" placeholder="Write..." 
      value={task} 
      onChange={(e)=>handleClick(e)}/>
      <button className="ml-3 cursor-pointer bg-blue-500 p-1 rounded-md text-white" onClick={AddTask}>Add Task</button>
    </div>
  );
}
