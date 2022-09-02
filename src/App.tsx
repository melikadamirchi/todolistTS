import {FC} from 'react'
import Header from './components/Header'
import { Todolist } from './components/Todolist'
import { useState } from 'react';
import { AppContext } from './cont/AppContext';
import { ITask } from './cont/Interface';
import {ChangeEvent} from 'react'

const App:FC=()=> {
  
  const[task,setTask]=useState<string>("")
  const[deadline,setDeadline]=useState<number>(0)
  const[todo,setTodo]=useState<ITask[]>([])

  const handleChange=(e:ChangeEvent<HTMLInputElement>):void=>{
    if(e.target.name==='task')
  setTask(e.target.value)
    else(
  setDeadline(Number(e.target.value))
)
  }
  const addTask=():void=>{
    const newTask={taskName:task,deadline:deadline}
  setTodo([...todo,newTask])
  setTask("")
  setDeadline(0)
  }
  const completeTask=(tasktodelete:string):void=>{
   setTodo(todo.filter((task)=>{
    return task.taskName != tasktodelete
   }))
  }

  return (
    <div>
      <AppContext.Provider value={{task,setTask,deadline,setDeadline,todo,setTodo,handleChange,addTask,completeTask}}>
         
         <Header/>
         <Todolist/>
         
          
          </AppContext.Provider>
    </div>
  )
}

export default App