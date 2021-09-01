import React, { FC, useState } from 'react';
import { Task } from '../App/App';

type Props = {
  addTitle: any;
  addedTasks: Task[];
  addNewTask: any;
  toDoTitle: string;
}

const CreateToDos: FC<Props> = ({ addTitle, toDoTitle, addedTasks, addNewTask }) => {
  const displayTaskAdder = () => {
   {
      return(
        <div>
          <form>
            <label htmlFor='newToDo'>New To Do:</label>
            <input type='text' name='newTask' placeholder='Add first task'></input>
            <button type='submit' onClick={addNewTask}>Save Task</button>
          </form>

        </div>
      )
    }

  }
  const displayAddedTasks = () => {
    const tasks = addedTasks.map((task) => {
      return (
        <div> 
          <p>{task.title}</p>
        </div>
      )
    })
    return tasks 
  }
  return (
    <div>
      <form>
        <label htmlFor='title'>To Do List Title:</label>
        <input type='text' name='title' onChange={addTitle}></input>
        {displayTaskAdder()}
      </form>
      <div>
        <h2>{toDoTitle}</h2>
      </div>
    </div>
  )
}

export default CreateToDos;