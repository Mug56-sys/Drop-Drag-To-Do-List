import ToDoList from "./components/ToDoList";
import { DndContext, closestCenter, DragOverlay } from "@dnd-kit/core";
import { useState } from "react";
import Task from "./components/Task"; 

export type Tasks = {
  id: number;
  text: string;
  status: string;
};

import "./index.css";

function App() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [dragId, setDragId] = useState<number | null>(null);

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };
  const AddTask = () => {
    if (task === "") return;
    const newTask = {
      id: tasks.length,
      text: task,
      status: "to-do",
    };
    setTasks([...tasks, newTask]);
    setTask("");
  };

  function handleDragStart(event: any) {
    setDragId(event.active.id);
  }

  function handleDragEnd(event: any) {
    const { active, over } = event;
    setDragId(null)
    if (active.id === over.id || !over) return;
    

    if (over.id === "bin") {
      setTasks((tasks) => tasks.filter((t) => t.id !== active.id));
    }

    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === active.id ? { ...task, status: over.id } : task
      )
    );
  }

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
      <DndContext collisionDetection={closestCenter} 
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}>
        <ToDoList tasks={tasks} />
         <DragOverlay>
    {dragId !== null ? (
      <Task
        id={dragId}
        text={tasks.find((task) => task.id === dragId)?.text || ""}
      />
    ) : null}
  </DragOverlay>
      </DndContext>
    </div>
  );
}

export default App;
