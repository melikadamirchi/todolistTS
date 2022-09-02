import React, {FC, ChangeEvent } from 'react'
import { useState } from 'react';
import TodoTask2 from './components/TodoTask2';

const App2:FC=()=> {
    const[task,setTask]=useState<string>("")
    const[deadline,setDeadline]=useState<number>(0)
    const[todolist,setTodolist]=useState<ITask[]>([])

    interface ITask{
        taskName:string,
        deadline:number
    }

    const handleChange=(e:ChangeEvent<HTMLInputElement>):void=>{
        if(e.target.name==="task"){
            setTask(e.target.value)
        }else{
            setDeadline(Number(e.target.value))
        }

    }
    const addTask=():void=>{
        const newTask={taskName:task, deadline: deadline}
        setTodolist([...todolist,newTask]);
        setTask("")
        setDeadline(0)

    }
    const completeTask=(taskNameToDelete:string):void=>{
        setTodolist(
            todolist.filter((val)=>{return val.taskName != taskNameToDelete})
        )

    }
  return (
    <div>
        <div className='header'>
            <input type="text" name="task" value={task} id="" onChange={handleChange} />
            <input type="text" name="deadline" id="" value={deadline} onChange={handleChange}/>
            <button onClick={addTask}>login</button>

        </div>
        <div className='todolist'>
            {todolist.map((task:ITask,key:number)=>{
                return <TodoTask2 key={key} task={task} completeTask={completeTask}/>
            })}
        </div>
    </div>
  )
}

export default App2