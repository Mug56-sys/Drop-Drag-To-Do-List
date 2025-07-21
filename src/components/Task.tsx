import { useDraggable } from '@dnd-kit/core'

export default function Task({id,text}:{id:number;text:string}) {
  const {attributes,listeners,setNodeRef}=useDraggable({
    id
  })
 
  return (
    <div
    ref={setNodeRef}
    {...attributes}
    {...listeners}
     className="bg-gray-500 m-1 p-2 cursor-grab rounded shadow-sm">
    {text}
      
    </div>
  )
}
