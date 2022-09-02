import './Header.css'
import { useContext } from 'react'
import { AppContext } from '../cont/AppContext';


export default function Header() {
  const{task,deadline,handleChange,addTask}=useContext(AppContext)


  return (
    <div className='app'>
        <div className='inputContainer'>
        <input type="text" name="task" id="task" value={task} placeholder='Task' onChange={handleChange}/>
        <input type="number" name="deadline" id="deadline" value={deadline} placeholder='Deadline' onChange={handleChange} />
        </div>
        <button className='btnn' onClick={addTask}>Add Task</button>
    </div>
  )
}
