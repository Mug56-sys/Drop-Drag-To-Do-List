import type { Tasks } from "../App.tsx";
import { useDroppable } from "@dnd-kit/core";
import Task from "./Task.tsx";

type Bucket = {
  name: string;
  type: string;
};

export default function ToDo({
  bucket,
  tasks,
}: {
  bucket: Bucket;
  tasks: Tasks[];
}) {
  const {setNodeRef}=useDroppable({
    id:bucket.type
  })

  const tasksType=tasks.filter((task)=>task.status===bucket.type)

  return (
    <div
    ref={setNodeRef}
      className="border w-90 px-10 overflow-scroll h-100 active:cursor-grabbing relative"
    >
      <p>{bucket.name}</p>
      {tasksType.map((task: Tasks) => 
        (<Task key={task.id} id={task.id} text={task.text} />)
        )}
    </div>
  );
}
