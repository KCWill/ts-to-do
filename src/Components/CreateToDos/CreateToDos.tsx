import  { FC } from 'react';
import { Task } from '../App/App';

type Props = {
  addTitle: any;
  addedTasks: Task[];
  addNewTask: any;
  toDoTitle: string;
  currentTaskInput: any;
}

const CreateToDos: FC<Props> = ({ addTitle, toDoTitle, addedTasks, addNewTask, currentTaskInput }) => {
  const tasks = addedTasks.map((task, key) => {
      return (
        <div key={key}> 
          <p>{task.title}</p>
        </div>
      )})

  return (
    <div>
      <form>
        <label htmlFor='title'>To Do List Title:</label>
        <input type='text' name='title' onChange={addTitle}></input>
      </form>
      <div>
            <label htmlFor='newToDo'>New To Do:</label>
            <input type='text' name='newTask' placeholder='Add first task' onChange={(e) => currentTaskInput(e.target.value)}></input>
            <button type='submit' onClick={addNewTask}>Save Task</button>
      </div>
      <div>
        <h2>{toDoTitle}</h2>
      </div>
      <div>
        <div>{tasks}</div>
      </div>
    </div>
  )
}

export default CreateToDos;