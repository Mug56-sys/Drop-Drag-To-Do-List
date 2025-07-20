import ToDo from "./ToDo"
import type {Tasks} from "../App.tsx"



export default function ToDoList({tasks}:{tasks:Tasks[]}) {
  console.log(tasks)
  return (
    <div className=" flex justify-around mt-10">
      <ToDo bucket={{name:'To Do',type:"to-do"}} tasks={tasks} />
      <ToDo bucket={{name:'In Progress',type:"in-progress"}} tasks={tasks}/>
      <ToDo bucket={{name:'Done',type:"done"}} tasks={tasks}/>
    </div>
  )
}
