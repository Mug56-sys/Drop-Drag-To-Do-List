import ToDo from "./ToDo"
import type {Tasks} from "../App.tsx"
import { useDroppable } from "@dnd-kit/core"


export default function ToDoList({tasks}:{tasks:Tasks[]}) {
  console.log(tasks)
  const{setNodeRef}=useDroppable({
    id:'bin'
  })
  return (
    <>
    <div className=" flex justify-around mt-10 ">
      <ToDo bucket={{name:'To Do',type:"to-do"}} tasks={tasks} />
      <ToDo bucket={{name:'In Progress',type:"in-progress"}} tasks={tasks}/>
      <ToDo bucket={{name:'Done',type:"done"}} tasks={tasks}/>
      
    </div>

    <div 
    ref={setNodeRef}
    className="fixed bottom-3 right-3 p-4 rounded-full z-50 bg-white/50 backdrop-blur-sm">
          <p className="text-8xl cursor-default">
            🗑️
          </p>
        </div>
    </>
  )
}
