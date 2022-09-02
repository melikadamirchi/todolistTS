import React from 'react'
import { ITask } from '../cont/Interface'
import { useContext } from 'react'
import { AppContext } from '../cont/AppContext';
import './Todolist.css'
import DeleteIcon from '@mui/icons-material/Delete';

interface Props{
    task:ITask;
    completeTask(tasktodelete:string):void
}

export const TodoAkhr=({task,completeTask}:Props)=> {
  return (
    <div className='todoList'>
      <span >{task.taskName}</span>
       <span style={{marginLeft:'5%',marginRight:'5%'}}>{task.deadline}</span> 
       
        <button className='bb' onClick={()=>{completeTask(task.taskName)}}><DeleteIcon/></button>
    <br /></div>
  )
}
