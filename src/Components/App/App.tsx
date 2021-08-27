import './App.css';
import ToDos from '../ToDos/ToDos';
import { useState, useEffect, FormEvent } from 'react';
import CreateToDos from '../CreateToDos/CreateToDos';

const App = () => {
  const [ toDoTitle, setToDoTitle ] = useState('');

  const addTitle = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = event.currentTarget.value;
    setToDoTitle(input);
  }
  return (
    <div className="App">
      <h1>My To Dos</h1>
      <ToDos />
      <CreateToDos addTitle={addTitle} />
    </div>
  );
}


export default App;
