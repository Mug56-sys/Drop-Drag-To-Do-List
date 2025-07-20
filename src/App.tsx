//import Adding from "./components/Adding";
import ToDoList from "./components/ToDoList";
//import { DndContext, closestCorners } from "@dnd-kit/core";
import { useEffect, useState } from "react";

export type Tasks = {
  id: number;
  text: string;
  status: string;
};
//import { useDraggable } from '@dnd-kit/core'
import "./index.css";

function App() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Tasks[]>([]);

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };
  const AddTask = () => {
    const newTask = {
      id: tasks.length,
      text: task,
      status: "to-do",
    };
    setTasks([...tasks, newTask]);
    setTask("");
  };
  useEffect(() => {
    console.log(tasks);
  }, [task]);
  return (
    <div className="text-3xl text-[Arial] ml-2 ">
      <span>TO DO LIST</span>
      <div className="text-sm pt-5">
        <input
          className="border rounded-3xl p-1"
          placeholder="Write..."
          value={task}
          onChange={(e) => handleClick(e)}
        />
        <button
          className="ml-3 cursor-pointer bg-blue-500 p-1 rounded-md text-white"
          onClick={AddTask}
        >
          Add Task
        </button>
      </div>
      <ToDoList tasks={tasks}/>

      <div className=" flex justify-end ">
        <p className="fixed bottom-3 right-0 text-8xl cursor-default">🗑️</p>
      </div>
    </div>
  );
}

export default App;
