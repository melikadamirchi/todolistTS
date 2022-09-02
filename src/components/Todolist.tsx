import { useContext } from 'react'
import { AppContext } from '../cont/AppContext';
import { ITask } from './../cont/Interface';
import {TodoAkhr} from './TodoAkhr';
import './Todolist.css'





export const Todolist=()=> {
  const {task,completeTask,todo}=useContext<any>(AppContext)
  return (
    <div className='todoList'>
        {todo.map((task: ITask, key: number)=>{
            return <TodoAkhr key={key} task={task} completeTask={completeTask}/>
        })}
    </div>
  )
}
