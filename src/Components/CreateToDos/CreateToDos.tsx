import React, { FC, useState } from 'react';


type Props = {
  addTitle: any;
  addedTasks: string[];
  addNewTask: any;
  toDoTitle: string;
}

const CreateToDos: FC<Props> = ({ addTitle, toDoTitle, addedTasks, addNewTask }) => {
  const displayTaskAdder = () => {
    if (!addedTasks.length){
      return(
        <div>
          <form>
            <label htmlFor='newToDo'>New To Do:</label>
            <input type='text' name='newTask' placeholder='Add first task'></input>
            <button type='submit' onSubmit={addNewTask}>Save Task</button>
          </form>
          <button>Add new task</button>
        </div>
      )
    }

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