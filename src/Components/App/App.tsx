import './App.css';
import ToDos from '../ToDos/ToDos';
import { useState, useEffect, FormEvent } from 'react';
import CreateToDos from '../CreateToDos/CreateToDos';

const App = () => {
  const [ toDoTitle, setToDoTitle ] = useState('');
  const [ addedTasks, setAddedTasks ] = useState([]);

  const addTitle = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = event.currentTarget.value;
    setToDoTitle(input);
  }

  const addNewTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = event.currentTarget.value;
    setAddedTasks(input)
  }

  return (
    <div className="App">
      <h1>My To Dos</h1>
      <ToDos />
      <CreateToDos 
        toDoTitle={toDoTitle}
        addTitle={addTitle}
        addNewTask={addNewTask}
        addedTasks={addedTasks}
      />
    </div>
  );
}


export default App;
