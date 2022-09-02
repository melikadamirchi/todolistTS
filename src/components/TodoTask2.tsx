import React from 'react'
import { ITask } from './../cont/Interface';

interface Props{
    task: ITask;
    completeTask(tasknameToDelete:string):void
}

export default function TodoTask2({task,completeTask}:Props) {
  return (
    <div>
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
        <button onClick={()=>completeTask(task.taskName)}>X</button>
    </div>
  )
}
