import type { Tasks } from "../App.tsx";
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
  return (
    <div
      className="border  w-90 px-10 overflow-scroll h-100
"
    >
      <p>{bucket.name}</p>
      {tasks.map((task: Tasks,index:number) => {
        if(bucket.type!==tasks[index].status)return;
        return (
          <div className="bg-gray-500 border m-1 p-2" key={task.id}>
            {task.text}
          </div>
        );
      })}
    </div>
  );
}
